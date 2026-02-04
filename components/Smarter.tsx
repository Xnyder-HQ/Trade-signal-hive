import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

export default function Smarter() {
    return (
        <section>
            <div className="">
                <h3 className="text-xs font-bold text-primary ml-50 mt-3 mb-3">TRADE SMARTER TODAY</h3>
            </div>
            <div className="flex justify-between">
                <div>
                   <h2 className="ml-50 text-4xl font-bold"> Essential Features <br />Built For Smarter Trading</h2>
                </div>
                <div>
                    <p className="text-sm text-gray-500 mr-50">Discover essential features that simplify investing, <br /> deliver real-time insight and empower smarter, <br />confident trading decisions.</p>
                </div>
            </div>
            <div className="tesla justify-between flex mt-10 mb-10 ">
                <div className="top-stock ml-50 p-3">
                 <div className="flex justify-between">
                    <h2 className="">Top Stock Driving<br />Smarter To Trading Insights</h2>
                    <ArrowUpRight className="bg-gray-400 rounded-full" size={30} />
                 </div>
                 <p className="text-sm text-gray-500">Track top stocks like Apple Tesla Amazon and NVIDIA for <br />smarter trading decisions.</p>    
                 <Link href="/dashboard"><button className=""> Start Trading Now</button></Link>
                </div>
                <div className="">
                   <div className="get-trade mr-50 mt-3 mb items-center w-1/2 p-3">
                     <div className="flex justify-between">
                        <h2>Get intelligent trading <br />suggestions with AI insights</h2>
                        <ArrowUpRight className="bg-gray-400 rounded-full" />
                     </div>
                     <p>Get AI-powered trading suggestions to make smarter, faster and confidence investment decision daily</p>
                     <Link href=" /dashbord"><button className="">Invest Today</button></Link>
                   </div>
                   <div className="">
                     <h2>Track Leading Stock and Market Indices</h2>
                     <p>Monitor Dow Jones, NASDAQ and top stocks like Apple in real-time to make smarter trading decisions</p>
                     <Link href=" /dashboard"><button className="">View Stocks</button></Link>

                   </div>
                </div>
            </div>
        </section>
    );
}
