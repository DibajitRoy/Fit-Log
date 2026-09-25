import { IWorkout } from "@/types/workout.type";
import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

interface IWorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 hover:border-[#ccff00]/50">
        <div className="relative h-48 bg-zinc-800">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-3 p-4">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#ccff00] px-2.5 py-0.5 text-[11px] font-bold uppercase text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-display text-lg font-bold uppercase text-white">
            {workout.name}
          </h3>

          <p className="text-sm text-white/50">{workout.equipment}</p>

          <div className="flex items-center gap-4 border-t border-white/10 pt-3 text-sm text-white/70">
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
      </div>
    </Link>
  );
};

export default WorkoutCard;