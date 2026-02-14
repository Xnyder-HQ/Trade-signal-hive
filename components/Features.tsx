import Link from "next/link";
import { Bookmark } from "lucide-react";
import { spaceGrotesk,inter } from "../lib/fonts";

export default function Features() {
  return (
    <section>
      <div className="flex justify-between ">
        <div className="ml-50 mt-50 w-1/2 p-3">
          <h2 className="text-4x1 font-bold text-primary mt-3 mb-3">MARKET INSIGHTS</h2>
          <h2 className={`news-text text-4xl font-bold mb-3 ${spaceGrotesk.className}`}>Lastest Market News <br />and Trending To Updates</h2>
          <p className={`text-sm text-gray-500 ${inter.className}`}>stay informed withthe latest market developments, breaking business <br />
          news, and trending financial stories to make smarter, timely trading <br /> 
          and investment decisions.
          </p>
          <Link href="/dashboard" className="read-more bg-primary rounded-full mt-10 inline-block text-black"><button>Read More</button></Link>
        </div>
        <div className="benz mr-50 mt-50 p-3 text-white items-center bg-white rounded-xl h-100">
          <div className="bg-black mb-3 p-3 rounded-xl">
            <div className="flex items-center">
              <Bookmark className="pr-2"/>
              <p className={`${inter.className}`}>Snap Just Bought A Student Calendar App: How could Be Reinvent Snapchat</p>
            </div>
            <p className={`text-sm text-gray-500 pt-3 pl-5 ${inter.className}`}>Benzing . 1d ago</p>
          </div>
          <div className="bg-black mb-3 p-3 rounded-xl">
           <div className="flex items-center">
             <Bookmark className="pr-2 "/>
            <p className={inter.className}>Deal Dispatch: Boston Red Sox Owner sets <br />
            Sights On La Liga Club, At Home Files For <br />
            Bankrupty</p>
           </div>
           <p className={`text-sm text-gray-500 pt-3 pl-5 ${inter.className}`}>Benzing . 1d ago</p>
          </div>
          <div className="bg-black p-3 mb-3 rounded-xl">
            <div className="flex items-center ">
              <Bookmark className="pr-2 text-white" />
            <p className={inter.className}>BREAKINGVIEWS-LA Lakers deal etches `Showtime` on trophy assets</p>
            </div>
            <p className={`text-sm text-gray-500 pt-3 pl-5 ${inter.className}`}>Benzing . 1d ago</p>
          </div>
        </div>
      </div>
    </section>
  );
}
