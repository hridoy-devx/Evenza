import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import EventOne from './EventOne'
import EventTwo from './EventTwo'
import EventThree from './EventThree'
import NavBar from './NavBar'
import { motion } from 'framer-motion'

const EventSchedule = () => {
    const [activeDay,setActiveDay] = useState("Day 01")

    const renderActive = ()=> {
        if(activeDay == "Day 01"){
            return <EventOne/>
        }
        if(activeDay == "Day 02"){
            return <EventTwo/>
        }
        if(activeDay == "Day 03"){
            return <EventThree/>
        }
    }

    return (
        <>
            <div className='bg-[url(./assets/EventSc.png)] bg-cover bg-center bg-no-repeat py-25 overflow-x-hidden'>
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
                            <p className='font-semibold text-[14px] text-white'>Our Event Schedule</p>
                        </Flex>
                        <h1 className='font-semibold text-3xl md:text-5xl text-white leading-tight pt-2.5'>Explore the complete schedule for our event</h1>
                        
                        <div className='bg-white/10 items-center justify-center gap-2 rounded-full max-w-md p-2 mx-auto mt-10'>
                            <Flex className='gap-2 justify-center flex-wrap'>
                                <button onClick={()=> setActiveDay("Day 01")} className={`px-6 py-3 rounded-full text-[18px] font-semibold text-white transition-all ${activeDay == "Day 01" && "bg-white text-secondary!"}`}>
                                    Day 01
                                </button>
                                <button onClick={()=> setActiveDay("Day 02")} className={`px-6 py-3 rounded-full text-[18px] font-semibold text-white transition-all ${activeDay == "Day 02" && "bg-white text-secondary!"}`}>
                                    Day 02
                                </button>
                                <button onClick={()=> setActiveDay("Day 03")} className={`px-6 py-3 rounded-full text-[18px] font-semibold text-white transition-all ${activeDay == "Day 03" && "bg-white text-secondary!"}`}>
                                    Day 03
                                </button>
                            </Flex>
                        </div>
                    </motion.div>
                                
                    <div className='pt-10'>
                        {renderActive()}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default EventSchedule