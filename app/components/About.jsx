import Image from 'next/image'
import React from 'react'
import { infoList } from '@/assets/assets'
import { motion } from 'motion/react'
import mypic2 from '@/assets/mypic2.jpeg'


const About = ({ id, isDarkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id={id} className='mb-40 scroll-mt-20'>
            <div>
                <motion.h4
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='text-center mb-2 text-lg font-Ovo text-gray-500'>Introduction</motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>About me</motion.h2>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-8 lg:mt-16 px-4'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-48 sm:w-64 md:w-80 max-w-none'>
                    <Image
                        className='w-full rounded-2xl'
                        src={mypic2} alt='my pic' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <p className='text-justify mb-6 lg:mb-10 max-w-[90%] mx-auto lg:max-w-2xl font-Ovo text-gray-500 text-sm lg:text-base leading-relaxed'>
                        I am an experienced Full Stack Developer with a demonstrated history of working in the
                        information technology and services industry. Skilled in React, Node.js, Express.js, MongoDB, and JavaScript.
                        Strong engineering professional with a Bachelor of Science - BS focused in
                        Software Engineering from the Virtual University of Pakistan.
                    </p>
                    <motion.ul
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                        {infoList.map(({ icon: Icon, title, description }, index) => (
                            <motion.li
                                whileHover={{ scale: 1.05 }}
                                className='border border-gray-400 p-6 cursor-pointer active:scale-95 transition-transform duration-200'
                                key={index}>
                                <Icon className='w-7 mt-3' />
                                <h3 className='my-4 font-semibold'>{title}</h3>
                                <p className='text-gray-500 text-sm'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About