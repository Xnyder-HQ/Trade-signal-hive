import { ArrowLeft, ArrowRight, BarChart2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Hero()  {
  return (
    <section>
        <div className="hero">
          <div>
          <div className="trade">
              <h3 className="text-primary text-center justify-center items-center">TRADE WITH CONFIDENCE</h3>
          </div>
          </div>
          <div className="investor mb-10 mt-10 text-center ">
            <h2>Instant Market Updates for<br />Smarter Faster investing</h2>
            <p>Stay in control of your finances with market updates powerful <br /> portfolio tools secure trading options - All in one</p>
          </div>
          <div className="flex justify-center gap-4 mb-10 mt-10 text-center">
            <div>
                <Link href="#download-app" className="bg-primary text-black px-4 py-2 rounded-full">Download the App</Link>
            </div>
            <div>
                <Link href="#download-app" className="join bg-primary text-black px-4 py-2 rounded-full" >Join Now</Link>
            </div>
          </div>
        </div>
          <Image src="/hero.png" alt="Hero Image" width={1200} height={560} className="w-full h-auto object-contain" />
    </section>
  );
} 