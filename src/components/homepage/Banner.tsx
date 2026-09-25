import Image from "next/image";
import bannerImg from "@/assets/banner.png";
import { FaDumbbell } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="px-4 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#ccff00]">
              Workout Library
            </span>

            <h1 className="font-display text-4xl font-bold uppercase leading-tight text-white md:text-5xl lg:text-6xl">
              Train with intent. Log every set.
            </h1>

            <p className="mx-auto max-w-lg text-base leading-7 text-white/60 md:mx-0 md:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href="#library"
                className="btn flex items-center gap-2 rounded-full border-0 bg-[#ccff00] px-7 text-black hover:bg-[#b8e600]"
              >
                <FaDumbbell />
                Browse Workouts
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <Image
              src={bannerImg}
              alt="Workout illustration"
              priority
              className="relative h-auto w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;