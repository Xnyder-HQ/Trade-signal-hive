import Link from "next/link";
import { spaceGrotesk,inter } from "../lib/fonts";

export default function Tools() {
    return(
        <section>
            <div className="mt-30 text-center">
                <h2 className="text-xs font-bold text-primary ml-2">SMART TOOLS</h2>
            </div>
            <div className="mt-3 advanced text-center ">
                <h2 className="text-4xl mb-4 font-bold {spaceGrotesk.className}">Explore Advanced <br /> Tools for Smarter Investing Trading Today</h2>
                <p className="text-sm  text-gray-500 max-w-lg mx-auto text-center {inter.className}">Use advanced trading tools to analyze markets, manage porfolios efficiently, and <br /> make smarter, confidence investment decision</p>  
            </div>
            <div className="flex justify-center gap-5 ">
                <div className="secured">
                    <h2 className="text-2xl font-bold pt-30">Secure Bank Transfers <br />and Fast Withdrawals Details</h2>
                    <p className="text-sm mt-3 text-gray-500">Track top stocks like Apple Tesla Amazon and NVIDIA for <br />smarter investing decisions</p>
                    <Link href="/dashboard"><button className="explore">Explore Now</button></Link>    
                </div>
                <div className="">
                    <div className="secure flex flex-col gap-5">
                        <div className="bank">
                            <p className="text-sm text-gray-500">Bnak Transfer</p>
                            <p className="text-sm text-gray-500">Saving(**** **** 7458)</p>
                        </div>
                        <div className="draw">
                            <h3 className="text-2xl font-bold">Withdraw Details</h3>
                            <ul>
                                <li className="text-sm text-gray-500">From:</li>
                                <li className="text-sm text-gray-500">Available Balance</li>
                                <li className="text-sm text-gray-500">Method:</li>
                                <li className="text-sm text-gray-500">Bank Transfer</li>
                                <li className="text-sm text-gray-500">Estimated arrival:</li>
                                <li className="text-sm text-gray-500">1-3 Business Days</li>
                                <li className="text-sm text-gray-500">Ammount:</li>
                                <li>$1458.7</li>
                                <li className="text-sm text-gray-500">Fee</li>
                                <li>$0.00</li>
                            </ul>
                            <div>
                                <ul className="total flex justify-between items-center ">
                                    <li>Total:</li>
                                    <li>$1458.7</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    )
}