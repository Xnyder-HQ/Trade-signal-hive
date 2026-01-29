import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2">
                <Hexagon className="h-6 w-6 text-primary filled-primary" />
                <span className="text-xl font-bold text-white">Trade Signal Hive</span> 
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">A modern trading signal platform for crypto and forex traders. Accurate, real-time, and reliable.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-white">Quick Links</h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                    <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                    <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                    <li><Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-white">Resources</h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <li><Link href="#trading-signals" className="hover:text-primary transition-colors">Trading Signals</Link></li>
                    <li><Link href="#live-chat" className="hover:text-primary transition-colors">Live Chat</Link></li>
                    <li><Link href="#help-center" className="hover:text-primary transition-colors">Help Center</Link></li>
                    <li><Link href="#community-forum" className="hover:text-primary transition-colors">Community Forum</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-white">Legal</h3>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <li><Link href="#terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                    <li><Link href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#cookie" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                    <li><Link href="#compliance" className="hover:text-primary transition-colors">Compliance</Link></li>
                </ul>
            </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Trade Signal Hive. All rights reserved.</p>
        <div className="flex gap-4">
             {/* tech stack placeholders icons or social links could go here */}
        </div>
      </div>
    </footer>
  );
}
