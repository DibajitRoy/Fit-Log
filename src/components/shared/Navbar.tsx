"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import logo from "@/assets/logo.png";
import { PlanContext } from "@/context/PlanContext";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Workouts" },
  { href: "/my-plan", label: "My Plan" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { todayPlan, saved } = useContext(PlanContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle text-white sm:hidden"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="FitLog Logo" className="h-6 w-6" />
            <span className="text-lg font-extrabold text-white">FITLOG</span>
          </Link>
        </div>

        <ul className="hidden items-center gap-2 sm:flex">
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
            <span className="hidden sm:inline">Plan</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black">
              {todayPlan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2 text-white/70">
            <span className="hidden sm:inline">Saved</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-xs font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="flex flex-col gap-1 border-t border-white/10 px-4 py-3 sm:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-full px-4 py-2 text-sm font-medium ${
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
      )}
    </nav>
  );
};

export default Navbar;