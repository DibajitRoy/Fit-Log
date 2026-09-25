import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaClock, FaFire, FaStar, FaTimes } from "react-icons/fa";

interface IPlanWorkoutCardProps {
  workout: IWorkout;
  showMarkAsDone: boolean;
  onMarkAsDone: () => void;
  onRemove: () => void;
}

const PlanWorkoutCard = ({
  workout,
  showMarkAsDone,
  onMarkAsDone,
  onRemove,
}: IPlanWorkoutCardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-zinc-900 p-4 sm:flex-row sm:items-center">
      <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-xl bg-zinc-800 sm:h-20 sm:w-28">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-lg font-bold uppercase text-white">
          {workout.name}
        </h3>
        <p className="text-sm text-white/50">{workout.equipment}</p>
        <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-white/60">
          <span className="flex items-center gap-1">
            <FaClock /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <FaFire /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" /> {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="btn btn-sm flex-1 rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 sm:flex-none"
        >
          View Details
        </Link>

        {showMarkAsDone && (
          <button
            onClick={onMarkAsDone}
            className="btn btn-sm flex flex-1 items-center justify-center gap-1 rounded-full border-0 bg-[#ccff00] text-black hover:bg-[#b8e600] sm:flex-none"
          >
            <FaCheck /> Done
          </button>
        )}

        <button
          onClick={onRemove}
          className="btn btn-sm btn-circle border border-white/20 bg-transparent text-white hover:bg-red-500/20 hover:text-red-400"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default PlanWorkoutCard;