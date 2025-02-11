'use client';
import React from 'react'
import { Button } from './ui/button'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { Loader } from 'lucide-react'
import { toast } from "sonner"
import { motion } from 'motion/react'

const Contact = ({ id }) => {
    const [loading, setLoading] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.target);

        formData.append("access_key", "5fac9696-0796-467d-9300-7fd7251a00b4");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setLoading(false)
            toast("Message sent successfully", {
                description: "I'll be in touch with you soon.",
                action: {
                    label: "X",
                },
            })
            event.target.reset();
        } else {
            console.log("Error", data);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id={id} className='scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo text-gray-500'>Connect with me</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-5xl font-Ovo'>Get in touch</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-justify max-w-2xl mx-auto mt-5 mb-16 font-Ovo text-gray-500'>
                I'd love to hear from you! if you have any questions or feedback feel free to reach out to me.
            </motion.p>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-auto gap-6 mt-10 mb-6'>
                    <motion.input
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        required type='text' placeholder='Enter your name' className='bg-transparent flex-1 p-3 outline-none border-[0.5px]
                         border-gray-400 rounded-md' name='name' />
                    <motion.input
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        required type='email' placeholder='Enter your email' className='bg-transparent flex-1 p-3 outline-none border-[0.5px]
                         border-gray-400 rounded-md' name='email' />
                </div>
                <motion.input
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    required type='text' placeholder='Enter your subject' className='bg-transparent w-full p-3 outline-none border-[0.5px]
                         border-gray-400 rounded-md mb-6' name='subject' />
                <motion.textarea
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    required rows={4} placeholder='Enter your message'
                    className='w-full p-3 outline-none border-[0.5px]
                         border-gray-400 rounded-md bg-transparent mb-3' name='message'></motion.textarea>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className='text-center'>
                    <Button type='submit' disabled={loading}>
                        {loading ? <>Send <Loader className='animate-spin' /> </> : <>Send <Send /></>}
                    </Button>
                </motion.div>

            </motion.form>
        </motion.div>
    )
}

export default Contact