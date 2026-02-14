import { Hexagon } from "lucide-react";
import Link from "next/link";
import {spaceGrotesk,inter} from "../lib/fonts";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        <div className="flex flex-col gap-4 w-full md:w-auto md:max-w-xs">
            <div className="flex items-center gap-2">
                <Hexagon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className={`text-lg sm:text-xl font-bold text-white ${spaceGrotesk.className}`}>Trade Signal Hive</span> 
            </div>
            <p className={`text-muted-foreground text-xs sm:text-sm leading-relaxed ${inter.className}`}>A modern trading signal platform for crypto and forex traders. Accurate, real-time, and reliable.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 w-full md:w-auto">
            <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className={`text-sm sm:text-base font-semibold text-white ${spaceGrotesk.className}`}>Quick Links</h3>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
                    <li><Link href="#features" className={`hover:text-primary transition-colors ${inter.className}`}>Features</Link></li>
                    <li><Link href="#pricing" className={`hover:text-primary transition-colors ${inter.className}`}>Pricing</Link></li>
                    <li><Link href="#faq" className={`hover:text-primary transition-colors ${inter.className}`}>FAQ</Link></li>
                    <li><Link href="#testimonials" className={`hover:text-primary transition-colors ${inter.className}`}>Testimonials</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className={`text-sm sm:text-base font-semibold text-white ${spaceGrotesk.className}`}>Resources</h3>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
                    <li><Link href="#trading-signals" className={`hover:text-primary transition-colors ${inter.className}`}>Trading Signals</Link></li>
                    <li><Link href="#live-chat" className={`hover:text-primary transition-colors ${inter.className}`}>Live Chat</Link></li>
                    <li><Link href="#help-center" className={`hover:text-primary transition-colors ${inter.className}`}>Help Center</Link></li>
                    <li><Link href="#community-forum" className={`hover:text-primary transition-colors ${inter.className}`}>Community Forum</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
                <h3 className={`text-sm sm:text-base font-semibold text-white ${spaceGrotesk.className}`}>Legal</h3>
                <ul className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
                    <li><Link href="#terms" className={`hover:text-primary transition-colors ${inter.className}`}>Terms of Use</Link></li>
                    <li><Link href="#privacy" className={`hover:text-primary transition-colors ${inter.className}`}>Privacy Policy</Link></li>
                    <li><Link href="#cookie" className={`hover:text-primary transition-colors ${inter.className}`}>Cookie Policy</Link></li>
                    <li><Link href="#compliance" className={`hover:text-primary transition-colors ${inter.className}`}>Compliance</Link></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center sm:text-left">
        <p className="text-xs text-muted-foreground order-2 sm:order-1">&copy; {new Date().getFullYear()} Trade Signal Hive. All rights reserved.</p>
        <div className="flex gap-4 order-1 sm:order-2">
             {/* tech stack placeholders icons or social links could go here */}
        </div>
      </div>
    </footer>
  )
}
