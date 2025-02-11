import { workData } from '@/assets/assets'
import React from 'react'
import { Send } from 'lucide-react'
import { motion } from 'motion/react'

const Work = ({ id }) => {
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
        className='text-center mb-2 text-lg font-Ovo text-gray-500'>My Portfolio</motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'>My latest work </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-justify max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-500'>
        As a MERN stack developer, I specialize in building dynamic and responsive web applications
        using MongoDB, Express.js, React, and Node.js. My expertise lies in creating
        seamless user experiences and efficient backend solutions.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className='grid grid-cols-auto my-10 gap-5 mt-16'>
        {workData.map((project, index) => (
          <a href={project.link} target='_blank' key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='aspect-square bg-no-repeat bg-cover bg-center 
            rounded-none hover:rounded-2xl duration-500  relative cursor-pointer group'
              style={{ backgroundImage: `url(${project.bgImage})` }}>
              <div className='bg-slate-900/90 w-10/12 absolute bottom-5 left-1/2 -translate-x-1/2
              py-3 px-5 flex items-center justify-between group-hover:rounded-2xl group-hover:bottom-7 duration-500'>
                <div>
                  <h2 className='font-semibold text-white'>{project.title}</h2>
                  <p className='text-sm text-gray-500'>{project.description}</p>
                </div>
                <div className='border rounded-full border-white w-10 aspect-square flex items-center justify-center 
                shadow-[2px_2px_0_#fff] group-hover:bg-red-600 transition'>
                  <Send className='text-white' />
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>
      {/* <div className='flex justify-center items-center'>
          <a href=""><Button>Show more <ArrowRight /></Button></a>
        </div> */}
    </motion.div>
  )
}

export default Work