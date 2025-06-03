import { serviceData } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'

const Services = ({ id }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id={id} className='mb-40 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-center mb-2 text-lg font-Ovo text-gray-500'>What I offer</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>My Services</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className='text-justify max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-500'>
                I offer a comprehensive range of full stack web development services, My expertise ensures seamless integration and functionality
                across all platforms. From concept to deployment,
                I deliver high-quality, scalable web solutions tailored to your needs.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className='grid grid-cols-auto gap-6 mt-16'>
                {serviceData.map(({ title, description, icon: Icon }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index} className='border border-gray-400 hover:rounded-2xl px-6 py-10 hover:shadow-forblack cursor-pointer
                         hover:bg-lightHover hover:-translate-y-3 duration-500 dark:hover:bg-darkHover dark:hover:shadow-forwhite'>
                        <Icon size={40} />
                        <h3 className='text-lg my-4'>{title}</h3>
                        <p className='text-sm text-gray-500 leading-5'>{description}</p>

                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Services