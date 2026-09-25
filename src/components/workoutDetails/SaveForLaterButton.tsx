"use client";

import { PlanContext } from "@/context/PlanContext";
import { IWorkout } from "@/types/workout.type";
import { useContext } from "react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(PlanContext);

  const alreadySaved = saved.some((item) => item.id === workout.id);

  const handleSave = () => {
    if (alreadySaved) {
      toast.info("Already saved");
      return;
    }

    setSaved([...saved, workout]);
    toast.success("Saved for later");
  };

  return (
    <button
      onClick={handleSave}
      className="btn flex flex-1 items-center gap-2 rounded-xl border border-white/30 bg-transparent text-white hover:bg-white/10"
    >
      <FaBookmark />
      Save for later
    </button>
  );
};

export default SaveForLaterButton;