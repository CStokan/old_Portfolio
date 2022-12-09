import React from 'react'
import { motion } from "framer-motion";
import pictureOfMe from '../images/PictureOfMe.jpg'


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}

        className='flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img 
        // Pulls image from the left to right
          initial={{
            x: -400,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, x:0, }}
          // turning to true will only make it go once
          viewport={{ once: false }}
          src={pictureOfMe.src}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
          md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>
            Here is a{" "}
          <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
            background
          </h4>
          <p className='text-base'>
            I'm Cooper.  I love coding, playing with Rubiks' Cubes, and 
            most importantly having a good time.  I took computer programming in school and fell in love,
            my first job in the field was a Security Analyst position and I loved every minute of it.  
            Learning new things everyday is something that I value very much and in this field there
            is a never-ending influx of new things to learn.
          </p>
      </div>
    </motion.div>
  )
}
