import React from 'react'
import Video from '../assets/tri.svg'
import Flex from './Flex'
import Container from './Container'
import Button from './Button'
import CountDown from './CountDown'
import { motion } from 'framer-motion'

const Banner = () => {
    return (
        <>  
            <div className='bg-[url(./assets/banner.png)] bg-cover bg-center bg-no-repeat py-37.5 overflow-hidden'>
                <Container>
                    <div className='text-white text-center'>
                        <motion.h1 
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7 }}
                            className='text-[76px] leading-20.75 font-extrabold'
                        >
                            Connecting Minds to Shape Tomorrow's Big Ideas
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className='pt-3.75 pb-13'
                        >
                            Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—exchanging ideas that spark growth, innovation, and meaningful change.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            <Flex className='justify-center gap-4 pb-15'>
                                <Button>Explore Schedule</Button>
                                <Flex className='gap-4 items-center'>
                                    <div className='relative rounded-full w-10 h-10 bg-primary'>
                                        <img src={Video} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                    </div>
                                    <a href="#">Watch</a>
                                </Flex>
                            </Flex>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                        >
                            <p>Upcoming Speaker Reveal - Don't Miss Out</p>
                            <CountDown/>
                        </motion.div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Banner