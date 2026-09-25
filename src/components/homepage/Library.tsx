import WorkoutCard from "@/components/shared/WorkoutCard";
import { IWorkout } from "@/types/workout.type";

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

const Library = async () => {
  const workouts = await getWorkouts();

  return (
    <section id="library" className="container mx-auto px-4 py-16">
      <div className="mb-10">
        <h2 className="font-display text-3xl font-bold uppercase text-white md:text-4xl">
          The Library
        </h2>
        <p className="mt-2 text-white/50">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout: IWorkout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Library;