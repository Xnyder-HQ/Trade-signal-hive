"use client";

import { ArrowUpRight } from "lucide-react";
import {spaceGrotesk,inter} from "../lib/fonts"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#050b0f] p-6 text-white">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left big card */}
        <div className="rounded-3xl bg-linear-to-br from-cyan-600/30 to-black p-6 shadow-xl">
          <div className="mb-6 flex items-center justify-between">
            <h1 className={`text-3xl font-semibold ${spaceGrotesk.className}`}>
              Top Stocks Driving<br />Smarter Trading Insights
            </h1>
            <button className="rounded-full bg-white/10 p-3">
              <ArrowUpRight />
            </button>
          </div>
          <p className={`mb-6 text-white/70 ${inter.className}`}>
            Track top stocks like Apple, Tesla, Amazon and NVIDIA for smarter
            investing decisions
          </p>
          <button className="mb-8 rounded-full bg-white/10 px-5 py-2">
            Start Trading Now
          </button>

          <div className="space-y-4">
            {[
              { name: "AAPL", company: "Apple Inc.", up: true },
              { name: "TSLA", company: "Tesla, Inc.", up: false },
              { name: "AMZN", company: "Amazon.com, Inc.", up: true },
              { name: "NVDA", company: "NVIDIA Corporation", up: true },
            ].map((stock) => (
              <div
                key={stock.name}
                className="flex items-center justify-between rounded-2xl bg-white/5 p-4"
              >
                <div>
                  <p className="font-semibold">{stock.name}</p>
                  <p className="text-sm text-white/60">{stock.company}</p>
                </div>
                <div className="text-right">
                  <p>$132.843</p>
                  <p
                    className={`text-sm ${stock.up ? "text-emerald-400" : "text-red-400"}`}
                  >
                    {stock.up ? "▲" : "▼"} 8.78%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right cards */}
        <div className="grid grid-cols-1 gap-6">
          <div className="rounded-3xl bg-linear-to-br from-cyan-500/30 to-black p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className={`text-2xl font-semibold ${spaceGrotesk.className}`}>
                Get intelligent trading<br />suggestions with AI insights
              </h2>
              <button className="rounded-full bg-white/10 p-3">
                <ArrowUpRight />
              </button>
            </div>
            <p className={`mb-4 text-white/70 ${inter.className}`}>
              Get AI-powered trading suggestions to make smarter, faster and
              confident investment decisions daily
            </p>
            <button className="rounded-full bg-white/10 px-5 py-2">
              Invest Today
            </button>
          </div>

          <div className="rounded-3xl bg-linear-to-br from-cyan-600/30 to-black p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className={`text-2xl font-semibold ${spaceGrotesk.className}`}>
                Track Leading<br />Stocks and Market Indices
              </h2>
              <button className="rounded-full bg-white/10 p-3">
                <ArrowUpRight />
              </button>
            </div>
            <p className={`mb-6 text-white/70 ${inter.className}`}>
              Monitor Dow Jones, NASDAQ and top stocks like Apple in real-time
              to make smarter trading decisions
            </p>
            <button className="mb-6 rounded-full bg-white/10 px-5 py-2">
              View Stocks
            </button>

            <div className="grid grid-cols-3 gap-4">
              {["Dow Jones", "NASDAQ", "AAPL"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/5 p-4 text-center"
                >
                  <p className="text-sm">{item}</p>
                  <p className="mt-2 font-semibold">$132.843</p>
                  <p className="text-sm text-emerald-400">▲ 8.78%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
