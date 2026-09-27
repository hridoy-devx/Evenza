import React from 'react'
import Container from './Container'
import Event1 from '../assets/event1.png'
import Event2 from '../assets/event2.png'
import Event3 from '../assets/event3.png'
import Event4 from '../assets/event4.png'
import { motion } from 'framer-motion'

const EventOne = () => {
  return (
    <>
    <Container>
        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-50/20 px-4 py-6 mx-auto gap-4"
        >
            <div className="flex gap-5 items-center w-full md:w-auto">
                <div>
                    <img src={Event1} alt="" className="w-16 h-16 object-cover rounded" />
                </div>
                <div className="text-white">
                    <p className="text-sm">9:00 AM - 5:30 PM</p>
                    <p className="text-sm">22 March 2025</p>
                </div>
            </div>
            <div className="w-full md:w-[45%] text-white">
                <h3 className="font-bold text-[18px]">Professional Skills Development Workshop</h3>
                <p className="text-[14px]">Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
            </div>
            <div className="flex gap-5 items-center text-white w-full md:w-auto">
                <p className="text-sm">Street, Block 12 Sector 4, Ipsum City</p>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-50/20 px-4 py-6 mx-auto gap-4"
        >
            <div className="flex gap-5 items-center w-full md:w-auto">
                <div>
                    <img src={Event2} alt="" className="w-16 h-16 object-cover rounded" />
                </div>
                <div className="text-white">
                    <p className="text-sm">9:00 AM - 5:30 PM</p>
                    <p className="text-sm">22 March 2025</p>
                </div>
            </div>
            <div className="w-full md:w-[45%] text-white">
                <h3 className="font-bold text-[18px]">Professional Skills Development Workshop</h3>
                <p className="text-[14px]">Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
            </div>
            <div className="flex gap-5 items-center text-white w-full md:w-auto">
                <p className="text-sm">Street, Block 12 Sector 4, Ipsum City</p>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-50/20 px-4 py-6 mx-auto gap-4"
        >
            <div className="flex gap-5 items-center w-full md:w-auto">
                <div>
                    <img src={Event3} alt="" className="w-16 h-16 object-cover rounded" />
                </div>
                <div className="text-white">
                    <p className="text-sm">9:00 AM - 5:30 PM</p>
                    <p className="text-sm">22 March 2025</p>
                </div>
            </div>
            <div className="w-full md:w-[45%] text-white">
                <h3 className="font-bold text-[18px]">Professional Skills Development Workshop</h3>
                <p className="text-[14px]">Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
            </div>
            <div className="flex gap-5 items-center text-white w-full md:w-auto">
                <p className="text-sm">Street, Block 12 Sector 4, Ipsum City</p>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-50/20 px-4 py-6 mx-auto mb-15 gap-4"
        >
            <div className="flex gap-5 items-center w-full md:w-auto">
                <div>
                    <img src={Event4} alt="" className="w-16 h-16 object-cover rounded" />
                </div>
                <div className="text-white">
                    <p className="text-sm">9:00 AM - 5:30 PM</p>
                    <p className="text-sm">22 March 2025</p>
                </div>
            </div>
            <div className="w-full md:w-[45%] text-white">
                <h3 className="font-bold text-[18px]">Professional Skills Development Workshop</h3>
                <p className="text-[14px]">Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
            </div>
            <div className="flex gap-5 items-center text-white w-full md:w-auto">
                <p className="text-sm">Street, Block 12 Sector 4, Ipsum City</p>
            </div>
        </motion.div>
    </Container>
    </>
  )
}

export default EventOne