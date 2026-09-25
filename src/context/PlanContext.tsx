"use client";

import { IWorkout } from "@/types/workout.type";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface IPlanContext {
  todayPlan: IWorkout[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const PlanContext = createContext<IPlanContext>({
  todayPlan: [],
  setTodayPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-today-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) setTodayPlan(JSON.parse(storedPlan));
    if (storedSaved) setSaved(JSON.parse(storedSaved));
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-today-plan", JSON.stringify(todayPlan));
  }, [todayPlan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    saved,
    setSaved,
  };

  return (
    <PlanContext.Provider value={sharedData}>{children}</PlanContext.Provider>
  );
};

export default PlanProvider;