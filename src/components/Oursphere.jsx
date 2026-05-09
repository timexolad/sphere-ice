import { assets, formats, spheredetails, best } from "../assets/assets";

export function OurSphere() {
    console.log(assets.oursphere)
    return (
        <section className="sm:min-h-screen w-full flex flex-col">
            <div className="sm:h-[450px] bg-[#0f0f0f] grid grid-cols-1 sm:grid-cols-3 ">
                <div className="h-full" >
                    <img src={assets.oursphere} className="h-full object-contain h-[300px] sm:h-[450px] " />
                </div>
                <div className="flex flex-col items-start mt-12 pl-15 space-y-4 text-xs ">
                    <h1 className="font-serif text-gray-300">
                        OUR SPHERE
                    </h1>
                    <h2 className="font-serif text-gray-300">
                        55MM PREMIUM <br />
                        ICE SPHERE
                        <hr className="border-[#58522a] border-t-2 rounded-2xl w-16" />
                    </h2>

                    <h2 className="text-xs text-gray-300">
                        Engineered using directional freezing to create <br /> high-density, crystal-clear spheres designed <br /> for premium spirits and signature cocktails.
                    </h2>
                    <div className="flex flex-col space-y-4">
                        {
                            spheredetails.map((sphere, index) => (
                                <div key={index} className="flex flex-row items-center justify-center space-x-8 text-gray-300">
                                    <div >{<sphere.icon />}</div>
                                    <h3>{sphere.title}</h3>
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className="border border-gray-600 flex flex-col items-center rounded-lg p-6 mt-5 sm:mt-15 space-y-6 sm:mb-12 sm:ml-20 sm:mr-12 bg-[#0f0f0f]">
                    <div className="flex flex-col items-center space-y-2">
                        <h1 className="uppercase text-gray-300 text-xs">
                            available formats
                        </h1>
                        <hr className="border-gray-500 border-t-2 rounded-2xl w-64" />
                    </div>
                    <div className="flex flex-col gap-6" >
                        {
                            formats.map((format, index) => (
                                <div key={index} className="flex gap-4 ">
                                    <div className="gap-4">{<format.icon size={48} strokeWidth={1} className="text-gray-300 shrink-0" />}</div>
                                    <div className="text-gray-300 text-xs" >
                                        <h1>{format.title}</h1>
                                        <h3>{format.description}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button className="bg-white text-xs font-thin tracking-tight p-2 rounded">
                        REQUEST TRADE PRICING
                    </button>
                </div>

            </div>
            <div className="bg-white sm:flex-1 ">
                <div className="flex flex-col items-center mt-6">
                    <h1 className="uppercase font-serif text-black text-3xl font-thin">made for the best</h1>
                    <hr className="border-[#9e9036] border-t-2 rounded-2xl w-16" />
                </div>
                <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:justify-center sm:py-15">
                    {
                        best.map((bes, index) => (
                            <div key={index} className="flex flex-row items-center ">
                                <div className="flex flex-col items-start p-6 space-y-2">
                                    <bes.icon className="text-[#9e9036]" strokeWidth={1} size={40} />
                                    <h3 className="text-xs font-bold uppercase tracking-widest">{bes.title}</h3>
                                    <p className="text-xs text-gray-500">{bes.description}</p>
                                </div>
                                {index < best.length - 1 && (
                                    <div className="border-l border-gray-300 self-stretch" />
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}