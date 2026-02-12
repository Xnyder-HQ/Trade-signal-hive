"use client";

import { ArrowUpRight } from "lucide-react";

export default function Dashboard() {
    const testimonials = [
    {
      name: "Kathryn Murphy",
      role: "Owner of Fidelity Investments",
      text:
        "From real-time stock updates to intuitive charts, this app gives me everything I need to confidently monitor and grow my investments every day.",
      stars: 4,
      image: "/avatar1.jpg",
      highlight: false,
    },
    {
      name: "Brooklyn Simmons",
      role: "Owner of Robinhood",
      text:
        "This app completely transformed my trading experience! Real-time market updates, intelligent insights, and easy-to-use tools make investing simple, fast, and enjoyable every single day.",
      stars: 5,
      image: "/avatar2.jpg",
      highlight: true,
    },
    {
      name: "Cameron Williamson",
      role: "Owner of Plantio",
      text:
        "This app completely transformed my trading experience! With real-time market updates, actionable insights, and intuitive tools, investing has never been easier or more confident.",
      stars: 4,
      image: "/avatar3.jpg",
      highlight: false,
    },
  ];
  return (
    <div className="min-h-screen bg-[#050b0f] p-6 text-white">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Left big card */}
        <div className="rounded-3xl bg-linear-to-br from-cyan-600/30 to-black p-6 shadow-xl">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-semibold">
              Top Stocks Driving<br />Smarter Trading Insights
            </h1>
            <button className="rounded-full bg-white/10 p-3">
              <ArrowUpRight />
            </button>
          </div>
          <p className="mb-6 text-white/70">
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
              <h2 className="text-2xl font-semibold">
                Get intelligent trading<br />suggestions with AI insights
              </h2>
              <button className="rounded-full bg-white/10 p-3">
                <ArrowUpRight />
              </button>
            </div>
            <p className="mb-4 text-white/70">
              Get AI-powered trading suggestions to make smarter, faster and
              confident investment decisions daily
            </p>
            <button className="rounded-full bg-white/10 px-5 py-2">
              Invest Today
            </button>
          </div>

          <div className="rounded-3xl bg-linear-to-br from-cyan-600/30 to-black p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Track Leading<br />Stocks and Market Indices
              </h2>
              <button className="rounded-full bg-white/10 p-3">
                <ArrowUpRight />
              </button>
            </div>
            <p className="mb-6 text-white/70">
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
