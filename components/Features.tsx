import { Zap, Shield, Globe, Cpu, Smartphone, Bell } from "lucide-react";

const features = [
  {
    name: 'Real-Time Execution',
    description: 'Signals are delivered instantly via our app and Telegram. Never miss a market move.',
    icon: Zap,
  },
  {
    name: 'Bank-Grade Security',
    description: 'Your data and API keys are encrypted with 256-bit AES protection. Trade with peace of mind.',
    icon: Shield,
  },
  {
    name: 'Global Markets',
    description: 'Access opportunities across Crypto, Forex, Commodities, and Stocks from one single dashboard.',
    icon: Globe,
  },
  {
    name: 'AI Algorithms',
    description: 'Our proprietary machine learning models analyze millions of data points to predict trends.',
    icon: Cpu,
  },
  {
    name: 'Mobile First',
    description: 'Manage your portfolio and receive alerts on the go with our top-rated mobile application.',
    icon: Smartphone,
  },
  {
    name: 'Smart Alerts',
    description: 'Customizable notifications ensure you act only on the signals that match your strategy.',
    icon: Bell,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Why Choose Hive?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to trade profitability
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We combine institutional-grade data with user-friendly tools to help you beat the market consistently.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col relative pl-16 group">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-black transition-all">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-black" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
