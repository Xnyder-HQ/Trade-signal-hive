import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RealTime from "@/components/RealTime";
import Features from "@/components/Features";
import Tools from "@/components/Tools";
import Plan from "@/components/Plan";
import Smarter from "@/components/Smarter";
import Investor from "@/components/Investor";
import EasyHelp from "@/components/EasyHelp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <RealTime />
      <Smarter />
      <Features />
      <Tools />
      <Plan />
      <Investor />
      <EasyHelp />
      <Footer />
    </main>
  );
}
