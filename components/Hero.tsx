import Link from "next/link";
import Image from "next/image";
import {spaceGrotesk,inter} from "../lib/fonts"

export default function Hero()  {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="hero">
          <div>
          <div className="trade">
              <h3 className="text-primary text-center text-sm sm:text-base md:text-lg mt-8 sm:mt-12 md:mt-16 lg:mt-20">TRADE WITH CONFIDENCE</h3>
          </div>
          </div>
          <div className="investor mb-4 sm:mb-6 md:mb-8 mt-4 sm:mt-6 md:mt-8 text-center px-4 sm:px-0">
            <h2 className={`${spaceGrotesk.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight`}>Instant Market Updates for<br className="hidden sm:block" /> Smarter Faster investing</h2>
            <p className={`${inter.className} text-xs sm:text-sm md:text-base text-muted-foreground mt-3 sm:mt-4 md:mt-5`}>Stay in control of your finances with market updates powerful <br className="hidden sm:block" /> portfolio tools secure trading options - All in one</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 mt-6 sm:mt-8 md:mt-10 text-center">
            <div>
                <Link href="#download-app" className="inline-block bg-primary text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base hover:bg-primary/90 transition-colors">Download the App</Link>
            </div>
            <div>
                <Link href="#download-app" className="inline-block join bg-primary text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base hover:bg-primary/90 transition-colors">Join Now</Link>
            </div>
          </div>
        </div>
          <Image src="/hero.png" alt="Hero Image" width={1200} height={560} className="w-full h-auto object-contain" />
    </section>
  );
} 