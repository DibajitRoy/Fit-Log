import Link from "next/link";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 py-20 text-center">
      <h3 className="font-display text-xl font-bold uppercase text-white">
        Nothing Here Yet
      </h3>
      <p className="max-w-sm text-white/50">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="btn mt-2 rounded-full border-0 bg-[#ccff00] px-6 text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyState;