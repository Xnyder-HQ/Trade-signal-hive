import { TrendingUp } from "lucide-react";
import Link from "next/link";   

export default function RealTime() {
  return (
        <div className=" container mx-auto px-4 py-16">
            <div className="flex items-center justify-center">
                <div >
                    <TrendingUp className="h-6 w-6 text-white" />   
                </div>
                <div>
                    <h3 className=" text-xs font-bold text-primary ml-2">REAL-TIME INSIGHTS</h3>
                </div>
               
            </div>
            <div className="flex flex-col gap-4 justify-center items-center mb-10">
                <h2 className="text-3xl font-bold text-white text-center max-w-lg"> Explore the  Essential Core Features For Smarter Tradering</h2>
                <p className="text-muted-foreground max-w-lg text-center ">Unlock smarter investingwith essential features that provide real-time insights simplify trading decisions and help you grow confidently</p>
            </div>  
            <div> 
                <div className="flex jusify-center items-center gap-4">
                    <div className="">
                        <h3 className="text-primary font-bold">MARKET INSIGHTS</h3>
                        <h3>Real-Time Stock Market Data Insights</h3>
                        <p>Get real-time stock market data insight to track trends make smarter investment decision, and stay informed for better financial growth</p>
                        <Link href="/dashboard"><button className="">View Portfolio</button></Link> 
                    </div>
                    <div className="">
                        <h3 className="text-primary font-bold">REALTIME INSIGHTS</h3>
                        <h3>Effiently Track and Grow Your Porfolio</h3> 
                        <p>Manage your investment effortlessly, track performance in real-time, and makeinformed decisions to grow your portfolio successfully</p>
                        <Link href="/dashboard"><button className="">View Portfolio</button></Link> 
                    </div>
                </div>
                <div className="flex justify-center gap-4">
                    <div className="flex items-center justify-center col-start-1 colo-end-7">
                        <h2 className="text-3xl font-bold text-white max-w-lg">Unlock your Investment Potential <br /> - Join Hive Now!</h2>
                    </div>
                   <div className="">
                     <Link href="/dashboard"><button className="bg-primary text-black px-4 py-2 rounded-full">Get Started</button></Link>
                   </div>
                </div>
            </div>
        </div>

  );
}
