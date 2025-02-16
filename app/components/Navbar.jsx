'use client';
import {
    Briefcase,
    Code,
    Home,
    MessageSquareMore,
    Phone,
    SquareUserRound,
} from "lucide-react";
import { useState, useEffect } from "react";

export const navData = [
    { name: "home", path: "#home", Icon: Home },
    { name: "about", path: "#about", Icon: SquareUserRound },
    { name: "services", path: "#services", Icon: Briefcase },
    { name: "work", path: "#work", Icon: Code },
    { name: "testimonials", path: "#testimonials", Icon: MessageSquareMore },
    { name: "contact", path: "#contact", Icon: Phone },
];

const Navbar = () => {
    // Use the current URL fragment to set the initial active path
    const [activePath, setActivePath] = useState(window.location.hash || '#home');

    const handleNavClick = (path) => {
        setActivePath(path);
        window.location.href = path;
    };

    useEffect(() => {
        const handleScroll = () => {
            navData.forEach(link => {
                const section = document.getElementById(link.name);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        const newActivePath = `#${section.id}`;
                        if (newActivePath !== activePath) {
                            setActivePath(newActivePath);
                            window.history.replaceState(null, null, newActivePath);
                        }
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call it initially to set the active path on load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activePath]);

    return (
        <nav className="flex flex-col items-center md:justify-center gap-y-4 fixed h-max bottom-0 mt-auto md:right-[2%] z-50 top-0 w-full md:w-16 md:max-w-md md:h-screen">
            <div className="flex w-full md:flex-col items-center justify-evenly md:justify-center gap-y-10 h-[70px] md:h-max py-8 bg-black/80 text-white dark:bg-white/10 backdrop-blur-lg text-3xl md:text-xl md:rounded-full">
                {navData.map((link, index) => (
                    <button
                        className={`${link.path === activePath ? "text-red-600" : ""} relative flex items-center group hover:text-red-600 transition-all duration-500`}
                        onClick={() => handleNavClick(link.path)}
                        key={index}
                    >
                        <div role="tooltip" className="absolute pr-14 right-0 hidden md:group-hover:flex">
                            <div className="bg-black text-white dark:bg-white dark:text-black relative flex text-primary items-center p-[6px] rounded-[3px]">
                                <div className="font-Ovo text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                                <div className="border-solid border-l-black dark:border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2" aria-hidden></div>
                            </div>
                        </div>
                        <div><link.Icon aria-hidden /></div>
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
