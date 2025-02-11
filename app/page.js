'use client';
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        if (typeof window !== 'undefined') {
            const isDark = localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches);
            setIsDarkMode(isDark);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.toggle('dark', isDarkMode);
            localStorage.theme = isDarkMode ? 'dark' : 'light';
        }
    }, [isDarkMode, mounted]);

    if (!mounted) return null;

    return (
        <div className="px-6 sm:px-[12%]">
            <Header id="home" isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <About id="about" isDarkMode={isDarkMode} />
            <Services id="services" isDarkMode={isDarkMode} />
            <Work id="work" isDarkMode={isDarkMode} />
            <Testimonials id="testimonials" isDarkMode={isDarkMode} />
            <Contact id="contact" isDarkMode={isDarkMode} />
            <Footer id="contact" isDarkMode={isDarkMode} />
        </div>
    );
}
