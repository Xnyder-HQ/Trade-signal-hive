import { ArrowRight } from "lucide-react";
import { spaceGrotesk, inter } from "../lib/fonts";
import Link from "next/link";
import Image from "next/image";

export default function EasyHelp() {
  return (
    <section className="py-16 px-6 bg-black border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className={`text-2xl md:text-3xl font-bold text-white ${spaceGrotesk.className}`}>
                Your Trading Journey Begins Here
              </h2>
            <p className={`text-muted-foreground max-w-lg ${inter.className}`}>
               Experience seamless investment with powerful tools, transparent pricing, and instant market  
              </p>
              <Link
                href="/dashboard"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-all"
              >
                Trade Now
                <ArrowRight className="h-4 w-4" />
              </Link>   
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
               <Image src="/trading.png" alt="" width={500} height={500} className="w-full h-auto object-contain" /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
