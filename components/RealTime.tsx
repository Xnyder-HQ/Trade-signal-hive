import { TrendingUp, BarChart3, PieChart,} from "lucide-react";
import Link from "next/link";
import { spaceGrotesk,inter } from "../lib/fonts";

export default function RealTime() {
  return (
    <section className="container mx-auto px-4 py-24">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mb-16 space-y-4">
        <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-xs font-bold text-primary tracking-wide">REAL-TIME INSIGHTS</span>
        </div>
        <h2 className={`text-3xl md:text-5xl font-bold text-white text-center max-w-2xl leading-tight ${spaceGrotesk.className}`}>
          Explore the Essential Core Features For Smarter Trading
        </h2>
        <p className={`text-muted-foreground max-w-xl text-center text-lg ${inter.className}`}>
          Unlock smarter investing with essential features that provide real-time insights, simplify trading decisions, and help you grow confidently.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Market Insights Card */}
        <div className="stock-market group relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-zinc-900 to-black p-10 hover:border-primary/50 transition-colors duration-500">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-1.5 text-blue-400">
                <BarChart3 className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Market Insights</span>
              </div>
              <h3 className={`mb-4 text-3xl font-bold text-white leading-tight ${spaceGrotesk.className}`}>
                Real-Time Stock Market Data Insights
              </h3>
              <p className={`text-zinc-400 leading-relaxed max-w-sm ${inter.className}`}>
                Get real-time stock market data insights to track trends, make smarter investment decisions, and stay informed for better financial growth.
              </p>
            </div>
            
            <div className="mt-10">
              <Link href="/dashboard">
                <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
        </div>

        {/* Realtime Insights Card */}
        <div className="porfolio group relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-zinc-900 to-black p-10 hover:border-primary/50 transition-colors duration-500">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-3 py-1.5 text-blue-400">
                <PieChart className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider">Realtime Insights</span>
              </div>
              <h3 className={`mb-4 text-3xl font-bold text-white leading-tight ${spaceGrotesk.className}`}>
                Efficiently Track and Grow Your Portfolio
              </h3>
              <p className={`text-zinc-400 leading-relaxed max-w-sm ${inter.className}`}>
                Manage your investments effortlessly, track performance in real-time, and make informed decisions to grow your portfolio successfully.
              </p>
            </div>
            
            <div className="mt-10">
              <Link href="/dashboard">
                <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
        </div>

        {/* Bottom Banner */}
        <div className="col-span-1 md:col-span-2 relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-r from-blue-950/50 to-black p-12 hover:border-primary/50 transition-colors duration-500">
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex-1">
              <h2 className={`text-3xl font-bold text-white md:text-4xl leading-tight ${spaceGrotesk.className}`}>
                Unlock Your Investment Potential <br />
                <span className="text-white">— Join Hive Now!</span>
              </h2>
            </div>
            
            <Link href="/dashboard">
              <button className="whitespace-nowrap rounded-full bg-primary px-8 py-4 text-base font-bold text-black transition-all hover:opacity-90 hover:scale-105 shadow-[0_0_20px_rgba(132,247,240,0.3)]">
                Get Started
              </button>
            </Link>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute bottom-0 left-0 h-full w-1/2 bg-blue-500/10 blur-[100px] pointer-events-none"></div>
        </div>
        
      </div>
    </section>
  );
}
