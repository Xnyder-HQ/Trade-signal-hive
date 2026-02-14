"use client";

import Link from "next/link";
import { Hexagon, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between px-3 sm:px-4 md:px-6">
        <Link href="/" className="flex items-center gap-1 sm:gap-2">
          <Hexagon className="h-6 w-6 sm:h-8 sm:w-8 text-primary fill-primary/20" strokeWidth={1.5} />
          <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white">
            Trade Signal <span className="text-primary hidden sm:inline">Hive</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs sm:text-sm font-medium text-muted-foreground">
          <Link href="#home" className="hover:text-white transition-colors">Home</Link>
          <Link href="#company" className="hover:text-white transition-colors">The Company</Link>
          <Link href="#copy-trading" className="hover:text-white transition-colors">Copy Trading</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
            <Link href="#download" className="flex items-center justify-center rounded-full bg-primary px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">Get Started</Link>
          <button className="md:hidden text-white p-1 hover:opacity-80 transition-opacity">
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
