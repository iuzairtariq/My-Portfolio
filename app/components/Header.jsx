'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Moon, Phone, Sun } from 'lucide-react'
import handicon from '@/assets/hand-icon.png'
import { motion } from 'motion/react'
import mypic from '@/assets/mypic.jpeg'
import DialogComp from './Dialog'

const Header = ({ id, isDarkMode, setIsDarkMode }) => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                setIsHidden(true);
            } else {
                // Scrolling up
                setIsHidden(false);
            }
            setLastScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [lastScrollY]);

    return (
        <div id={id} className='flex flex-col items-center justify-center h-screen text-center mx-auto gap-8'>
            <nav
                className={`fixed z-50 top-0 left-1/2 transform -translate-x-1/2 w-[70%] md:w-1/2 lg:w-1/3 bg-black/80 dark:bg-white/10
        text-white backdrop-blur-lg shadow-md rounded-b-2xl transition-transform duration-700 ease-in-out 
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
            >
                <div className='h-[70px] flex items-center justify-around'>
                    <button className='p-2'><a href="#contact"><Phone /></a></button>
                    <a href='#home' className='text-2xl font-bold'>Uzair Tariq</a>
                    <button
                        onClick={() => setIsDarkMode(prev => !prev)}
                        className='cursor-pointer p-2 rounded-full hover:bg-white/10 transition-all'
                    >
                        <div className='relative h-6 w-6'>
                            <motion.div
                                key={isDarkMode ? 'sun' : 'moon'}
                                initial={{ rotate: isDarkMode ? -270 : 270, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: isDarkMode ? 270 : -270, opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className='absolute inset-0'
                            >
                                {isDarkMode ? (
                                    <Sun className='w-full h-full' />
                                ) : (
                                    <Moon className='w-full h-full' />
                                )}
                            </motion.div>
                        </div>
                    </button>
                </div>
            </nav>

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            >
                <Image
                    className='rounded-full w-44 sm:w-48'
                    src={mypic}
                    alt='mypic'
                />
            </motion.div>

            <motion.h3
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='block sm:flex items-center gap-2 text-2xl sm:text-3xl'>
                <span className='text-gray-500 font-Ovo'>Hi! I'm</span> <span className='font-Ovo'>Muhammad Uzair</span>
                <Image className='w-8 sm:-mt-2 mx-auto' src={handicon} alt='hand' />
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className='text-4xl sm:text-6xl font-Ovo text-gray-500'>
                I'm a <span className='text-black dark:text-white font-Ovo'>Full Stack</span> Developer
            </motion.h1>
            <motion.p
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className=' mx-auto font-Ovo text-gray-500'>
                Innovative Full Stack Developer with a flair for designing user-friendly and dynamic web applications. Based in Pakistan
            </motion.p>
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}>
                <DialogComp />
            </motion.div>
        </div>
    )
}

export default Header