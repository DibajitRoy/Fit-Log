import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-display text-6xl font-bold text-[#ccff00]">404</h1>
      <p className="text-lg text-white/60">This page does not exist.</p>
      <Link
        href="/"
        className="btn rounded-full border-0 bg-[#ccff00] px-7 text-black"
      >
        Back to Workouts
      </Link>
    </div>
  );
};

export default NotFound;