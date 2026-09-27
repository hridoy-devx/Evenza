import React from 'react'
import Container from './Container'
import Flex from './Flex'
import AboutImg from '../assets/aboutUs.png'
import Button from './Button'
import Icon1 from '../assets/iconone.png'
import Icon2 from '../assets/icontwo.png'
import Icon3 from '../assets/iconthree.png'
import { motion } from 'framer-motion'

const AboutUs = () => {
    return (
        <section className="bg-white text-black py-24 min-h-screen overflow-hidden">
            <Container>
                <Flex className="flex-wrap lg:flex-nowrap justify-between items-center gap-10">
                    {/* Left Side Image with Animation */}
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7 }}
                        className='w-full lg:w-[678px]'
                    >
                        <img src={AboutImg} alt="About Us" className="w-full h-auto rounded-2xl shadow-xl" />
                    </motion.div>

                    {/* Right Side Content with Animation */}
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className=''
                    >
                        <Flex className="items-center">
                            <div className='h-1.5 w-1.5 bg-purple-600 rounded-full my-auto'></div>
                            <p className='font-semibold text-[14px] text-purple-600 ml-2'>About Us</p>
                        </Flex>
                        
                        <h1 className='text-[48px] font-semibold leading-[52px] pt-15 text-black'>Behind this event</h1>
                        
                        <p className='text-[16px] max-w-[663px] leading-[25px] pt-4.5 text-gray-700'>
                            Discover the vision that drives this event—a commitment to bringing together innovators, leaders, and changemakers to share knowledge, spark inspiration, and create meaningful connections.
                        </p>
                        
                        <p className='text-[16px] max-w-[663px] leading-[25px] pt-4.5 text-gray-700'>
                            Our vision is to build a global community where collaboration fuels innovation we aim encourage fresh thinking, spark inspiring dialogues, and create a space.
                        </p>
                        
                        <Flex className='max-w-[663px] bg-gray-50 border border-gray-200 shadow-lg p-4 rounded-lg mt-6 gap-6'>
                            <Flex className='gap-4 items-center'>
                                <img src={Icon1} alt="Icon 1" />
                                <h1 className='text-[20px] font-bold text-black'>Receive real-time event updates.</h1>
                            </Flex>
                            <Flex className='gap-4 items-center'>
                                <img src={Icon2} alt="Icon 2" />
                                <h1 className='text-[20px] font-bold text-black'>Receive real-time event updates.</h1>
                            </Flex>
                        </Flex>

                        <Flex className='pt-10 gap-4 items-center flex-wrap'>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="bg-purple-600 hover:bg-purple-700 transition duration-300 text-white shadow-lg shadow-purple-600/30 px-8 py-3.5 rounded-lg font-semibold">
                                    Learn More About
                                </Button>
                            </motion.div>
                            
                            <Flex className='gap-4 items-center'>
                                <img src={Icon3} alt="Icon 3" />
                                <div className='w-[190px]'>
                                    <h2 className='text-[20px] font-bold text-black'>Call now</h2>
                                    <p className='text-[18px] text-gray-600'>+00 123 456 789</p>
                                </div>
                            </Flex>
                        </Flex>
                    </motion.div>
                </Flex>
            </Container>
        </section>
    )
}

export default AboutUs