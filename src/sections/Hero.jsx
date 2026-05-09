import { assets, hightlights } from "../assets/assets";
import { Button } from "../components/Button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="sm:flex container mx-auto px-6 pt-32 pb-20 relative ">
                <div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center ">
                        {/*left column */}
                        <div className="space-y-4" >
                            <div className="text-5xl md:text-6xl lg:text-7xl font-serif font-thin tracking-tight leading-[0.9] ">
                                <h1 className="uppercase text-white animate-fade-in animation-delay-100 ">
                                    precision <br />frozen.
                                </h1>
                                <h1 className="uppercase text-white animate-fade-in animation-delay-300">
                                    perfectly <br />round.
                                </h1>
                            </div>
                            <p className="uppercase text-sm text-gray-300 max-w-lg animate-fade-in animation-delay-400">
                                premium clear ice spheres<br />for bars that care.
                            </p>
                        </div>
                    </div>
                    {/*CTAs */}
                    <div className="flex mt-4 flex-wrap gap-4">
                        <Button className="text-black bg-white uppercase " >open trade account</Button>
                        <button className="relative border text-gray-300 uppercase border-gray-300 rounded-lg 
                        px-5 py-2 font-medium transition-all duration-300 bg-transparent overflow-visible group px-8 py-4 
                        
                        ">view pricing</button>
                    </div>
                    <div className="flex max-w-[450px] gap-8 mt-10">
                        {
                            hightlights.map((highlight, index) => (
                                <div className="flex flex-col items-center text-center w-[180px]" key={index}>
                                    <div className="mb-3 text-white text-xl " >{<highlight.icon />}
                                    </div>
                                    <h3 className="text-white text-sm font-extrabold uppercase tracking-[2px]">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-gray-400 text-[12px] leading-4">
                                        {highlight.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/*right column */}
                <div className="relative pt-4 sm:pt-0 animate-fade-in animation-delay-300">
                    <div className="relative max-w-md mx-auto">
                        <div className="relative glass rounded-3xl p-2 ">
                            <img className="w-full aspect-[4/5] object-cover rounded-2xl" src={assets.cupice} alt="" />
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}