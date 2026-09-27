import React from 'react'
import Container from './Container'
import Flex from './Flex'
import speakerone from '../assets/speakeruno.png'
import speakertwo from '../assets/speakerdos.png'
import speakerthree from '../assets/speakertres.png'
import { motion } from 'framer-motion'

const OurSpeakers = () => {
    return (
        <>
            <div className='bg-white py-25 overflow-x-hidden'>
                <Container>
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className='max-w-3xl mx-auto text-black'
                    >
                        <Flex className='gap-4 justify-center items-center'>
                            <div className='h-1.5 w-1.5 bg-primary rounded-full'></div>
                            <p className='font-semibold text-[14px] text-center'>Our Speakers</p>
                        </Flex>
                        <h1 className='text-center font-semibold text-3xl md:text-5xl leading-tight pt-2.5'>Introducing the expert speakers</h1>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Flex className='pt-22.5 gap-7.5 justify-between flex-wrap lg:flex-nowrap'>
                            <div className='w-full sm:w-[48%] lg:w-[32%] mb-8 lg:mb-0'>
                                <img src={speakerone} alt="" className='w-full object-cover rounded-lg' />
                                <h3 className='text-[20px] font-semibold pt-7 text-black'>Sophia Rodrigues</h3>
                                <p className='text-[16px] pt-3 text-gray-700'>Global Marketing Director</p>
                            </div>
                            <div className='w-full sm:w-[48%] lg:w-[32%] mb-8 lg:mb-0'>
                                <img src={speakertwo} alt="" className='w-full object-cover rounded-lg' />
                                <h3 className='text-[20px] font-semibold pt-7 text-black'>Jacob Jones</h3>
                                <p className='text-[16px] pt-3 text-gray-700'>Lead AI Research Scientist</p>
                            </div>
                            <div className='w-full sm:w-[48%] lg:w-[32%] mb-8 lg:mb-0'>
                                <img src={speakerthree} alt="" className='w-full object-cover rounded-lg' />
                                <h3 className='text-[20px] font-semibold pt-7 text-black'>Arlene McCoy</h3>
                                <p className='text-[16px] pt-3 text-gray-700'>Innovation Strategy Expert</p>
                            </div>
                        </Flex>
                    </motion.div>
                </Container>
            </div>
        </>
    )
}

export default OurSpeakers