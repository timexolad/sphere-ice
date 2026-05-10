import { assets, formats, spheredetails, best } from "../assets/assets";

export function OurSphere() {
    return (
        <section className="w-full flex flex-col">
            <div className="bg-[#0f0f0f] grid grid-cols-1 sm:grid-cols-3 py-10 gap-4">
                <div className="flex justify-center">
                    <img src={assets.oursphere} className="object-contain h-[250px] sm:h-[400px] w-full" />
                </div>
                <div className="flex flex-col items-start px-6 sm:px-0 sm:mt-8 space-y-4 text-xs">
                    <h1 className="font-serif text-gray-300">OUR SPHERE</h1>
                    <h2 className="font-serif text-gray-300">
                        55MM PREMIUM <br />ICE SPHERE
                        <hr className="border-[#58522a] border-t-2 rounded-2xl w-16 mt-2" />
                    </h2>
                    <h2 className="text-xs text-gray-300">
                        Engineered using directional freezing to create high-density, crystal-clear spheres designed for premium spirits and signature cocktails.
                    </h2>
                    <div className="flex flex-col space-y-4">
                        {
                            spheredetails.map((sphere, index) => (
                                <div key={index} className="flex flex-row items-center justify-start space-x-3 text-gray-300">
                                    <div>{<sphere.icon size={16} />}</div>
                                    <h3>{sphere.title}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="border border-gray-600 flex flex-col items-center rounded-lg p-6 mx-4 sm:mx-6 sm:my-8 space-y-6 bg-[#0f0f0f]">
                    <div className="flex flex-col items-center space-y-2">
                        <h1 className="uppercase text-gray-300 text-xs">available formats</h1>
                        <hr className="border-gray-500 border-t-2 rounded-2xl w-64" />
                    </div>
                    <div className="flex flex-col gap-6">
                        {
                            formats.map((format, index) => (
                                <div key={index} className="flex gap-4">
                                    <div>{<format.icon size={48} strokeWidth={1} className="text-gray-300 shrink-0" />}</div>
                                    <div className="text-gray-300 text-xs">
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
            <div className="bg-white py-10">
                <div className="flex flex-col items-center mt-6 mb-6">
                    <h1 className="uppercase font-serif text-black text-3xl font-thin">made for the best</h1>
                    <hr className="border-[#9e9036] border-t-2 rounded-2xl w-16 mt-2" />
                </div>
                <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center sm:justify-center pb-8">
                    {
                        best.map((bes, index) => (
                            <div key={index} className="flex flex-row items-center">
                                <div className="flex flex-col items-start p-4 sm:p-6 space-y-2">
                                    <bes.icon className="text-[#9e9036]" strokeWidth={1} size={36} />
                                    <h3 className="text-xs font-bold uppercase tracking-widest">{bes.title}</h3>
                                    <p className="text-xs text-gray-500">{bes.description}</p>
                                </div>
                                {index < best.length - 1 && (
                                    <div className="border-l border-gray-300 self-stretch hidden sm:block" />
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}