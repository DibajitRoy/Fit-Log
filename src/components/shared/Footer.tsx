import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/60 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="FitLog Logo" className="h-5 w-5" />
          <span className="font-bold text-white">FITLOG</span>
        </div>
        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;