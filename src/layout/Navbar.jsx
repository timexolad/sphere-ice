import { useState } from "react";
import { assets, navLinks } from "../assets/assets";
import { Button } from "../components/Button"
import { Menu, X } from "lucide-react";

export function Navbar() {


    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [active, setActive] = useState(0)

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-5 z-50">
            <nav className="container mx-auto px-0.5 flex items-center justify-between">
                <a href="#">
                    <img src={assets.logo} alt="logo" />
                </a>
                { /* desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-5 " >
                        {
                            navLinks.map((link, index) => (
                                <div key={index} className="flex flex-col items-center w-fit">
                                    <a href={link.href} onClick={(e) => {
                                        e.preventDefault()   // 👈 stops page navigation resetting state
                                        setActive(index)
                                    }} className={`text-sm font-semibold transition-all duration-200
                                         ${active === index ? 'text-white' : 'text-gray-300'
                                        }`}>{link.label}</a>
                                    <div className={`nav-underline ${active === index ? 'active' : 'inactive'}`} />
                                </div>

                            ))
                        }
                    </div>
                </div>
                <div className="hidden md:block">
                    <Button >TRADE ACCOUNT</Button>
                </div>
                {/* mobile menu button */}
                <button onClick={() => setIsMobileMenuOpen((prev) => !prev)} className="md:hidden p-2 text-gray-300">
                    {isMobileMenuOpen ? <X /> : <Menu size={24} />}
                </button>
            </nav>
            {/* mobile menu */}
            {isMobileMenuOpen && (<div className="md:hidden bg-black/80 backdrop-blur-md min-h-screen animate-fade-in ">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {
                        navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="text-lg text-gray-300 py-2">{link.label}</a>
                        ))
                    }
                    <Button >TRADE ACCOUNT</Button>
                </div>

            </div>)}
        </header>
    )
}