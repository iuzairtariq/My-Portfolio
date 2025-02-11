import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'

const Footer = ({ id }) => {
    return (
        <div id={id} className='mt-16 mb-20 md:mb-0'>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className='flex items-end justify-center gap-1'>
                    <h1 className='text-4xl font-semibold'>Uzair Tariq</h1>
                    <div className='w-2 h-2 rounded-full bg-red-600'></div>
                </div>
                <p className='flex items-center justify-center gap-1 mt-2 text-gray-500'><Mail /> uzairtariq102@gmail.com</p>
            </motion.div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mt-12 py-6'>
                <p>
                    &copy; Uzair Tariq. All rights reserved.
                </p>
                <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                    <li>
                        <a target='_blank' href="https://github.com/iuzairtariq"><Github /></a>
                    </li>
                    <li>
                        <a href="#"><Linkedin /></a>
                    </li>
                    <li>
                        <a href="#"><Twitter /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer