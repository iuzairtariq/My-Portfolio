'use client';
import { useState, useEffect } from 'react';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        role: 'CEO, Company A',
        comment: 'This product changed my life! Highly recommended.',
        image: user1
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: 'CTO, Company B',
        comment: 'Amazing service and support. Will definitely use again.',
        image: user2
    },
    {
        id: 3,
        name: 'Alice Johnson',
        role: 'Designer, Company C',
        comment: 'The best experience I\'ve ever had with a product.',
        image: user3
    },
    {
        id: 4,
        name: 'Bilal Raza',
        role: 'Designer, Company C',
        comment: 'The best experience I\'ve ever had with a product.',
        image: user4
    }
];

const Testimonials = ({ id }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
            }, 3500);

            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <motion.div
            id={id}
            className="mb-40 scroll-mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center mb-2 text-lg font-Ovo text-gray-500"
            >
                Testimonials
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo"
            >
                What do clients say
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-justify max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-500"
            >
                With unparalleled coding mastery and visionary designs,
                our project soared beyond expectations,
                delivering an extraordinary and seamless web experience.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="relative w-full max-w-4xl mx-auto p-10 mt-16 border border-gray-400 rounded-2xl hover:bg-lightHover dark:hover:bg-darkHover"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }} // Reduce x value
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }} // Reduce x value
                        transition={{ duration: 0.5 }} // Reduce transition duration
                        className="flex flex-col gap-4 items-center text-center"
                    >
                        <motion.div
                            initial={{ scale: 0.10 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                        >
                            <Image
                                src={testimonials[currentIndex].image}
                                width={150}
                                height={150}
                                alt={testimonials[currentIndex].name}
                                className="rounded-full mb-3"
                            />
                        </motion.div>
                        <motion.h3
                            className="text-2xl font-bold font-Ovo"
                            initial={{ y: 30 }}
                            animate={{ y: 0 }}
                        >
                            {testimonials[currentIndex].name}
                        </motion.h3>
                        <motion.p
                            className="text-sm font-semibold font-Ovo text-gray-500 mb-4"
                            initial={{ y: 30 }}
                            animate={{ y: 0 }}
                        >
                            {testimonials[currentIndex].role}
                        </motion.p>
                        <motion.p
                            className="text-gray-500 italic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            &quot;{testimonials[currentIndex].comment}&quot;
                        </motion.p>
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, index) => (
                        <motion.span
                            key={index}
                            className={`indicator ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'} w-3 h-3 rounded-full cursor-pointer`}
                            onClick={() => handleIndicatorClick(index)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            animate={{
                                scale: index === currentIndex ? 1.2 : 1,
                                backgroundColor: index === currentIndex ? '#3B82F6' : '#D1D5DB'
                            }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Testimonials;
