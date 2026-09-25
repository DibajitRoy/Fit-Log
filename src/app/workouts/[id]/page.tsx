import AddToPlanButton from "@/components/workoutDetails/AddToPlanButton";
import SaveForLaterButton from "@/components/workoutDetails/SaveForLaterButton";
import { IWorkout } from "@/types/workout.type";
import Image from "next/image";

interface IWorkoutDetailsPageProps {
  params: Promise<{ id: string }>;
}

const getWorkouts = async () => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workouts = await getWorkouts();
  const workout = workouts.find(
    (item: IWorkout) => String(item.id) === String(id),
  ) as IWorkout;

  if (!workout) {
    return (
      <div className="container mx-auto px-4 py-20 text-center text-white/60">
        Workout not found.
      </div>
    );
  }

  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <div className="container mx-auto grid gap-10 px-4 py-10 md:grid-cols-2">
      <div className="relative h-80 overflow-hidden rounded-2xl bg-zinc-900 md:h-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="font-display text-3xl font-bold uppercase text-white md:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-3 leading-7 text-white/60">{workout.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold uppercase text-black"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="divide-y divide-white/10 rounded-2xl border border-white/10">
          {specs.map(([label, value]) => (
            <div
              key={label}
              className="flex items-center justify-between px-4 py-3 text-sm"
            >
              <span className="uppercase text-white/40">{label}</span>
              <span className="font-semibold text-white">{value}</span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-3 font-display text-lg font-bold uppercase text-[#ccff00]">
            Instructions
          </h3>
          <ol className="space-y-2">
            {workout.instructions.map((step, index) => (
              <li key={index} className="flex gap-3 text-white/70">
                <span className="font-bold text-white">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-wrap gap-3">
          <AddToPlanButton workout={workout} />
          <SaveForLaterButton workout={workout} />
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;