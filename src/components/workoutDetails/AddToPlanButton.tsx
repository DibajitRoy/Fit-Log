"use client";

import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { FaDumbbell } from "react-icons/fa";
import { toast } from "react-toastify";

const PLAN_CAP = 5;

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { todayPlan, setTodayPlan } = useContext(PlanContext);

  const alreadyAdded = todayPlan.some((item) => item.id === workout.id);
  const isFull = todayPlan.length >= PLAN_CAP;

  const handleAddToPlan = () => {
    if (alreadyAdded) {
      toast.info("Already in today's plan");
      return;
    }

    if (isFull) {
      toast.error("Today's plan is full");
      return;
    }

    setTodayPlan([...todayPlan, workout]);
    toast.success("Added to today's plan");
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={isFull && !alreadyAdded}
      className="btn flex flex-1 items-center gap-2 rounded-xl border-0 bg-[#ccff00] text-black hover:bg-[#b8e600] disabled:bg-white/10 disabled:text-white/30"
    >
      <FaDumbbell />
      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlanButton;