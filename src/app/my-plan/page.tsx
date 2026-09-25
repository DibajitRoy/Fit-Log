"use client";

import EmptyState from "@/components/myPlan/EmptyState";
import MetricsSummary from "@/components/myPlan/MetricsSummary";
import PlanWorkoutCard from "@/components/myPlan/PlanWorkoutCard";
import SortDropdown from "@/components/myPlan/SortDropdown";
import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/workout.type";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

type SortKey = "duration" | "caloriesBurned" | "rating";
type Tab = "today" | "saved";

const MyPlanPage = () => {
  const { todayPlan, setTodayPlan, saved, setSaved } = useContext(PlanContext);
  const [activeTab, setActiveTab] = useState<Tab>("today");
  const [sortBy, setSortBy] = useState<SortKey>("duration");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const sortWorkouts = (workouts: IWorkout[]) => {
    const sorted = [...workouts];
    sorted.sort((a, b) => a[sortBy] - b[sortBy]);
    return sorted;
  };

  const handleMarkAsDone = (workout: IWorkout) => {
    setTodayPlan(todayPlan.filter((item) => item.id !== workout.id));
    toast.success("Marked as done");
  };

  const handleRemove = (workout: IWorkout, from: Tab) => {
    if (from === "today") {
      setTodayPlan(todayPlan.filter((item) => item.id !== workout.id));
    } else {
      setSaved(saved.filter((item) => item.id !== workout.id));
    }
    toast.info("Removed");
  };

  const activeList =
    activeTab === "today" ? sortWorkouts(todayPlan) : sortWorkouts(saved);

  const totalMinutes = todayPlan.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = todayPlan.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-display text-3xl font-bold uppercase text-white md:text-4xl">
        My Plan
      </h1>
      <p className="mt-2 text-white/50">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <MetricsSummary
        exercises={todayPlan.length}
        minutes={totalMinutes}
        calories={totalCalories}
      />

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2 rounded-full bg-white/5 p-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              activeTab === "today" ? "bg-white text-black" : "text-white/60"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              activeTab === "saved" ? "bg-white text-black" : "text-white/60"
            }`}
          >
            Saved
          </button>
        </div>

        <SortDropdown sortBy={sortBy} onChange={setSortBy} />
      </div>

      <div className="mt-6 space-y-4">
        {isLoading ? (
          <p className="py-10 text-center text-white/40">Loading workouts…</p>
        ) : activeList.length > 0 ? (
          activeList.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              showMarkAsDone={activeTab === "today"}
              onMarkAsDone={() => handleMarkAsDone(workout)}
              onRemove={() => handleRemove(workout, activeTab)}
            />
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
};

export default MyPlanPage;