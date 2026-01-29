import Link from "next/link";

export default function Tools() {
    return(
        <section>
            <div className="">
                <h2>SMART TOOLS</h2>
            </div>
            <div className="">
                <h2>Explore Advanced Tools for Smarter Investing Trading Today</h2>
                <p>Use advanced trading tools to analyze markets, manage porfolios efficiently, and make smarter, confidence investment decision</p>  
            </div>
            <div className="flex justify-center gap-5">
                <div className="secured">
                    <h2>Secure Bank Transfers <br />and Fast Withdrawals Details</h2>
                    <p>Track top stocks like Apple Tesla Amazon and NVIDIA for <br />smarter investing decisions</p>
                    <Link href="/dashboard"><button className="explore">Explore Now</button></Link>    
                </div>
                <div className="">
                    <div className="secure">
                        <div className="bank">
                            <p>Bnak Transfer</p>
                            <p>Saving(**** **** 7458)</p>
                        </div>
                        <div className="draw">
                            <h3>Withdraw Details</h3>
                            <ul>
                                <li>From:</li>
                                <li>Available Balance</li>
                                <li>Method:</li>
                                <li>Bank Transfer</li>
                                <li>Estimated arrival:</li>
                                <li>1-3 Business Days</li>
                                <li>Ammount:</li>
                                <li>$1458.7</li>
                                <li>Fee</li>
                                <li>$0.00</li>
                            </ul>
                            <div>
                                <ul>
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