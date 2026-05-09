import { ChevronRight } from "lucide-react";
import { assets, getintouch, poursphere, process, quicklinks, trade } from "../assets/assets";

export function Ourprocess() {
    return (
        <div className="bg-black">

           
            <section className="bg-black py-16 px-6">

                
                <div className="flex flex-col items-center mb-12">
                    <h1 className="font-serif text-gray-100 uppercase tracking-widest text-2xl mb-3">
                        Our Process
                    </h1>
                    <hr className="border-[#58522a] border-t-2 rounded-2xl w-16" />
                </div>

                
                <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-4">
                    {process.map((proces, index) => {
                        const Icon = proces.icon;
                        return (
                            <div key={index} className="flex flex-row md:flex-row items-center w-full md:w-auto">
                                {/* ADJUSTMENT: max-w + text-center to match the picture's column layout */}
                                <div className="flex flex-col items-center text-center text-gray-100 max-w-[150px] gap-3">
                                    <Icon size={40} strokeWidth={1} className="text-gray-100" />
                                    <h3 className="font-bold uppercase text-xs tracking-wider">{proces.title}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">{proces.description}</p>
                                </div>

                                {/* ADJUSTMENT: chevron hidden on mobile between stacked items */}
                                {index < process.length - 1 && (
                                    <div className="text-gray-500 mx-3 mb-10 hidden md:block">
                                        <ChevronRight size={16} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            
            <section className="flex flex-col md:flex-row w-full">
                <div className="bg-white flex flex-col justify-center gap-5 p-10 md:w-1/2">
                    <p className="uppercase text-xs tracking-widest text-gray-500">Trade Partners</p>
                  
                    <h2 className="font-serif uppercase text-4xl md:text-5xl leading-tight text-black">
                        Let's Raise <br /> The Standard
                    </h2>
                    <hr className="border-[#58522a] border-t-2 rounded-2xl w-16" />
                    <p className="text-gray-600 text-sm max-w-sm">
                        Join Berkshire's premium venues that trust Sphear Ice for quality, reliability and service.
                    </p>
                   
                    <button className="uppercase bg-black text-white font-serif text-xs tracking-widest py-3 px-5 w-fit">
                        Apply for Trade Account
                    </button>
                </div>

              
              
                <div className="md:w-1/2 h-64 md:h-auto">
                    <img src={assets.sphear} alt="Sphear Ice" className="w-full h-full object-cover" />
                </div>
            </section>

            {/* ── 3. FOOTER ── */}
           
            <footer className="bg-[#0a0a0a] text-gray-400 px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

                    {/* Col 1 — Logo + tagline + social icons */}
                    {poursphere.map((pour, index) => {
                        const Icon1 = pour.icon1; 
                        const Icon2 = pour.icon2; 
                        return (
                            <div key={index} className="flex flex-col gap-4">
                                <img src={pour.Image} alt="Sphear Logo" className="w-16 h-16 rounded-full object-cover" />
                                <p className="text-xs leading-relaxed text-gray-500">{pour.title}</p>
                               
                                <div className="flex gap-3 text-gray-400">
                                    <Icon1 size={18} />
                                    <Icon2 size={18} />
                                </div>
                            </div>
                        );
                    })}

                    {/* Col 2 — Quick Links */}
                    <div className="flex flex-col gap-3">
                        <h1 className="uppercase text-gray-100 text-xs tracking-widest mb-2">Quick Links</h1>
                        {quicklinks.map((quick, index) => (
                            /* ADJUSTMENT: fixed href — was "quick.href" string literal */
                            <a href={quick.href} key={index} className="text-gray-500 text-sm hover:text-white transition-colors">
                                {quick.title}
                            </a>
                        ))}
                    </div>

                   
                    <div className="flex flex-col gap-3">
                        <h1 className="uppercase text-gray-100 text-xs tracking-widest mb-2">Trade</h1>
                        {trade.map((trad, index) => (
                            <a href={trad.href} key={index} className="text-gray-500 text-sm hover:text-white transition-colors">
                                {trad.link}
                            </a>
                        ))}
                    </div>

               
                    <div className="flex flex-col gap-3">
                        <h1 className="uppercase text-gray-100 text-xs tracking-widest mb-2">Get in Touch</h1>
                        {getintouch.map((get, index) => {
                            const Icon = get.icon;
                            return (
                                <div key={index} className="flex items-center gap-2 text-gray-500 text-sm">
                                    <Icon size={14} />
                                    <span>{get.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

               
                <hr className="border-gray-800 mb-6" />
               
                <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 gap-2">
                    <span>© Sphear Ice 2026. All rights reserved</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}