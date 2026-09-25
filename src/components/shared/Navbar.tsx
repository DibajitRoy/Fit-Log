"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import logo from "@/assets/logo.png";
import { PlanContext } from "@/context/PlanContext";

const navLinks = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { todayPlan, saved } = useContext(PlanContext);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="FitLog Logo" className="h-6 w-6" />
          <span className="text-lg font-extrabold text-white">FITLOG</span>
        </Link>

        <ul className="flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                    isActive
                      ? "bg-[#ccff00] text-black"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2 text-white/70">
            Plan
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
              {todayPlan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2 text-white/70">
            Saved
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-xs font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;