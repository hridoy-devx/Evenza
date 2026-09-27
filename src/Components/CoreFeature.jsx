import React from 'react'
import Container from './Container'
import Flex from './Flex'
import CoreOne from '../assets/Background.svg'
import CoreTwo from '../assets/CoreTwo.png'
import CoreThree from '../assets/CoreThree.png'
import CoreFour from '../assets/CoreFour.png'
import { motion } from 'framer-motion'

const CoreFeature = () => {
    return (
        <>
            <div className='bg-[url(./assets/Background6.png)] bg-cover bg-center bg-no-repeat py-27.5 overflow-x-hidden'>
                <Container>
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className='max-w-4xl mx-auto'
                    >
                        <Flex className='gap-4 justify-center'>
                            <div className='h-1.5 w-1.5 gap-4 bg-white rounded-full my-auto'></div>
                            <p className='font-semibold text-[14px] text-white text-center'>Core Feature</p>
                        </Flex>
                        <h1 className='text-center font-semibold text-4xl lg:text-5xl text-white leading-13 pt-2.5'>Core features that power our exceptional services</h1>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <Flex className='gap-5 pt-20 justify-between flex-wrap lg:flex-nowrap'>
                            <div className='w-full sm:w-[48%] lg:w-[23%] mb-6 lg:mb-0'>
                                <div className='rounded-[10px] pl-6 pr-4 text-white bg-white/10 hover:bg-primary transition duration-300'>
                                    <img src={CoreOne} alt="" className='pt-10' />
                                    <h3 className='pt-25 text-[18px] lg:text-[20px] font-semibold'>Event Planning Manage</h3>
                                    <p className='pt-3 text-[14px] lg:text-[16px] pb-8'>Deliver seamless virtual experience
                                        with high-quality streaming and
                                        interactive tools.</p>
                                    <div className='bg-gray-500 w-full h-px'></div>
                                    <div className='pt-8 pb-5 cursor-pointer'>Read more</div>
                                </div>
                            </div>
                            <div className='w-full sm:w-[48%] lg:w-[23%] mb-6 lg:mb-0'>
                                <div className='rounded-[10px] pl-6 pr-4 text-white bg-white/10 hover:bg-primary transition duration-300'>
                                    <img src={CoreTwo} alt="" className='pt-10' />
                                    <h3 className='pt-25 text-[18px] lg:text-[20px] font-semibold'>Event Planning Manage</h3>
                                    <p className='pt-3 text-[14px] lg:text-[16px] pb-8'>Deliver seamless virtual experience
                                        with high-quality streaming and
                                        interactive tools.</p>
                                    <div className='bg-gray-500 w-full h-px'></div>
                                    <div className='pt-8 pb-5 cursor-pointer'>Read more</div>
                                </div>
                            </div>
                            <div className='w-full sm:w-[48%] lg:w-[23%] mb-6 lg:mb-0'>
                                <div className='rounded-[10px] pl-6 pr-4 text-white bg-white/10 hover:bg-primary transition duration-300'>
                                    <img src={CoreThree} alt="" className='pt-10' />
                                    <h3 className='pt-25 text-[18px] lg:text-[20px] font-semibold'>Event Planning Manage</h3>
                                    <p className='pt-3 text-[14px] lg:text-[16px] pb-8'>Deliver seamless virtual experience
                                        with high-quality streaming and
                                        interactive tools.</p>
                                    <div className='bg-gray-500 w-full h-px'></div>
                                    <div className='pt-8 pb-5 cursor-pointer'>Read more</div>
                                </div>
                            </div>
                            <div className='w-full sm:w-[48%] lg:w-[23%] mb-6 lg:mb-0'>
                                <div className='rounded-[10px] pl-6 pr-4 text-white bg-white/10 hover:bg-primary transition duration-300'>
                                    <img src={CoreFour} alt="" className='pt-10' />
                                    <h3 className='pt-25 text-[18px] lg:text-[20px] font-semibold'>Event Planning Manage</h3>
                                    <p className='pt-3 text-[14px] lg:text-[16px] pb-8'>Deliver seamless virtual experience
                                        with high-quality streaming and
                                        interactive tools.</p>
                                    <div className='bg-gray-500 w-full h-px'></div>
                                    <div className='pt-8 pb-5 cursor-pointer'>Read more</div>
                                </div>
                            </div>
                        </Flex>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className='w-155 pt-15.5 mx-auto max-w-full'
                    >
                        <p className=' text-white text-[16px] text-center'>Join our team and help weave innovation, quality, and success together worldwide.</p>
                        <Flex className='gap-2 mx-auto justify-center items-center pt-4'>
                            <p className='font-bold text-[20px] text-white'>4.9/5</p>
                            <i className="fa-solid fa-star text-center" style={{ color: "rgb(115, 75, 223)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                            <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                            <p className='font-bold text-[20px] text-white'>Our 4200 Review</p>
                        </Flex>
                    </motion.div>
                </Container>
            </div>
        </>
    )
}

export default CoreFeature