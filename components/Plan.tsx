import Link from "next/link";
import icon from "lucide-react"; 
export default function Plan() {
    return( 
        <div>
            <div className=" flex justify-center items-center">
                <h2 className=" text-base font-semibold leading-7 text-primary">CHOOSE YOUR PLAN</h2>
            </div>
            <div className="justify-center items-center">
                <h2 className=" text-4xl font-bold text-center">Simple Transparent <br /> and Flexble Pricing for Everyone</h2>
                <p className="pricing">Select the perfect plan for your investing journey - Transparent Pricing no <br /> hidden fees just smarter trader</p>
            </div>
            <div className="journey gap-6">
               {/* Premium Plan Card (Left) */}
               <div className="box1 flex flex-col justify-between h-full bg-[#0a0a0a] border border-[#27272a] rounded-[30px] p-8 w-[380px]">
                <div>
                    <div className="pro flex justify-between items-center mb-6">
                        <span className="commend px-4 py-1.5 rounded-full text-sm font-medium bg-[#1e1e1e] text-gray-300 border-none">Recommended</span>
                        <span className="text-gray-300 text-sm font-medium">Premium Plan</span>
                    </div>
                    <div className="plans flex items-baseline gap-1 mb-8">
                        <span className="dollar text-5xl font-semibold text-white">$29</span>
                        <div className="time flex flex-col text-xs text-gray-400 leading-tight ml-2">
                             <span>one-time payment</span>
                             <span>plus local taxes</span>
                        </div>
                    </div>
                    
                    <div className="relative flex items-center justify-center my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#27272a]"></div>
                        </div>
                        <span className="relative bg-[#0a0a0a] px-3 text-sm text-gray-500">Features</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center text-gray-300 text-sm"><span className="mr-3 text-gray-500"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#27272a" /><path d="M8 12L11 15L16 9" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> All Pro Features</li>
                        <li className="flex items-center text-gray-300 text-sm"><span className="mr-3 text-gray-500"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#27272a" /><path d="M8 12L11 15L16 9" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> VIP webinars & tutorials</li>
                        <li className="flex items-center text-gray-300 text-sm"><span className="mr-3 text-gray-500"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#27272a" /><path d="M8 12L11 15L16 9" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> AI-powered portfolio suggestions</li>
                    </ul>
                </div>
                <Link href="/dashboard" className="w-full"><button className="w-full py-4 rounded-xl bg-[#18181b] text-white hover:bg-[#27272a] transition-colors font-medium">Get Started</button></Link>    
               </div> 

              {/* Pro Plan Card (Right) */}
              <div className="box2 flex flex-col justify-between h-full bg-linear-to-b from-[#111827] to-[#0a0a0a] border border-[#1f2937] rounded-[30px] p-8 w-[380px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>
                <div className="relative z-10">
                    <div className="pro flex justify-between items-center mb-6">
                        <span className="commend px-4 py-1.5 rounded-full text-sm font-medium bg-[#1f2937]/50 text-cyan-400 border border-cyan-500/20">Advanced</span>
                        <span className="text-gray-300 text-sm font-medium">Pro Plan</span>
                    </div>
                    <div className="plans flex items-baseline gap-1 mb-8">
                        <span className="dollar text-5xl font-semibold text-white">$39</span>
                        <div className="time flex flex-col text-xs text-gray-400 leading-tight ml-2">
                             <span>one-time payment</span>
                             <span>plus local taxes</span>
                        </div>
                    </div>  

                    <Link href="/dashboard" className="w-full block mb-8"><button className="w-full py-4 rounded-full bg-[#67e8f9] text-black font-semibold hover:bg-[#22d3ee] transition-colors shadow-[0_0_20px_rgba(103,232,249,0.3)]">Get Started</button></Link>
                    
                    <p className="text-xs text-gray-500 leading-relaxed mb-6">Unlock all Pro features, AI portfolio suggestions VIP webinars Zero-fee premium trading benefits</p>       
                    
                    <div className="relative flex items-center justify-center mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#1f2937]"></div>
                        </div>
                        <span className="relative bg-[#0b0f17] px-3 text-sm text-gray-500">Features</span>
                    </div>

                    <ul className="space-y-4">
                        <li className="flex items-start text-gray-300 text-sm"><span className="mr-3 mt-1 min-w-[20px]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> <span><span className="text-white font-medium">Advanced market</span> analytics provides insights for smarter investment decisions</span></li>
                        <li className="flex items-start text-gray-300 text-sm"><span className="mr-3 mt-1 min-w-[20px]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0055 7.003C19.0033 7.88917 18.7032 8.75024 18.1554 9.44976C17.6075 10.1493 16.8431 10.647 15.98 10.87" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> <span><span className="text-white font-medium">Join and connect</span> with investors to grow wealth together</span></li>
                        <li className="flex items-start text-gray-300 text-sm"><span className="mr-3 mt-1 min-w-[20px]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 16V12H5V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H5V16H21V21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 7V3H5V7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> <span>Create and manage <span className="text-white font-medium">unlimited watchlists</span> for smarter market tracking</span></li>
                        <li className="flex items-start text-gray-300 text-sm"><span className="mr-3 mt-1 min-w-[20px]"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17V22H22V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 17V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12H22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 12V8C6 6.34315 7.34315 5 9 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span> <span>Track market movements with instant alerts for smarter decisions</span></li>
                    </ul>
                </div>
              </div>

           </div>
        </div>
    )
}