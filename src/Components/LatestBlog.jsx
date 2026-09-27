import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Link1 from '../assets/link1.png'
import Link2 from '../assets/link2.png'
import Link3 from '../assets/link3.png'
import { motion } from 'framer-motion'

const LatestBlog = () => {
    return (
        <>
            <div className='bg-white py-25 overflow-x-hidden'>
                <Container>
                    <motion.div 
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className='max-w-3xl mx-auto text-center'
                    >
                        <Flex className='gap-4 justify-center items-center'>
                            <div className='h-1.5 w-1.5 bg-primary rounded-full'></div>
                            <p className='font-semibold text-[14px] text-black'>Latest Blog</p>
                        </Flex>
                        <h1 className='font-semibold text-3xl md:text-5xl text-black leading-tight pt-2.5'>Explore our latest insights stories and updates</h1>
                    </motion.div>

                    <Flex className='mt-16 gap-8 justify-between flex-wrap lg:flex-nowrap'>
                        {/* Left Big Blog Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className='w-full lg:w-[48%]'
                        >
                            <img src={Link1} alt="" className='w-full h-auto object-cover rounded-[10px]' />
                            <p className='text-[#737681] mt-5'>Esther Howard</p>
                            <h3 className='text-[20px] font-semibold mt-3 text-black'>Mastering Public Speaking: Expert Tips for Confident Presentations</h3>
                            <p className='mt-3 text-[#737681] text-sm md:text-base'>Improve your communication skills with proven techniques used by world-class speakers to captivate and inspire audiences.</p>
                            <p className='text-primary mt-6 font-semibold flex items-center gap-2 cursor-pointer'>Read More <i className="fa-solid fa-arrow-right" style={{ color: "rgb(115, 75, 223)" }}></i></p>
                        </motion.div>

                        {/* Right Two Small Blog Cards */}
                        <motion.div 
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className='w-full lg:w-[48%] flex flex-col gap-8'
                        >
                            <div className='flex flex-col sm:flex-row gap-5 items-center bg-[#F6F6F7] p-5 rounded-[15px]'>
                                <img src={Link2} alt="" className='w-full sm:w-[150px] h-[120px] object-cover rounded-[10px]' />
                                <div>
                                    <p className='text-[#737681] text-sm'>Esther Howard</p>
                                    <h3 className='text-[18px] font-semibold mt-2 text-black'>Simple Self-Defense Skills Everyone Should Learn for Safety</h3>
                                    <p className='text-primary mt-4 font-semibold flex items-center gap-2 cursor-pointer'>Read More <i className="fa-solid fa-arrow-right" style={{ color: "rgb(115, 75, 223)" }}></i></p>
                                </div>
                            </div>

                            <div className='flex flex-col sm:flex-row gap-5 items-center bg-[#F6F6F7] p-5 rounded-[15px]'>
                                <img src={Link3} alt="" className='w-full sm:w-[150px] h-[120px] object-cover rounded-[10px]' />
                                <div>
                                    <p className='text-[#737681] text-sm'>Esther Howard</p>
                                    <h3 className='text-[18px] font-semibold mt-2 text-black'>Simple Self-Defense Skills Everyone Should Learn for Safety</h3>
                                    <p className='text-primary mt-4 font-semibold flex items-center gap-2 cursor-pointer'>Read More <i className="fa-solid fa-arrow-right" style={{ color: "rgb(115, 75, 223)" }}></i></p>
                                </div>
                            </div>
                        </motion.div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default LatestBlog