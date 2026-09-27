import React from 'react'
import Flex from './Flex'
import Container from './Container'
import pricing1 from '../assets/pricing.png'
import Button from './Button'
import { motion } from 'framer-motion'

const PricingPlan = () => {
  return (
    <>
    <div className='bg-white py-25 overflow-x-hidden'>
      <Container>
        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className='max-w-3xl mx-auto text-black text-center'
        >
            <Flex className='gap-4 justify-center items-center'>
                <div className='h-1.5 w-1.5 bg-primary rounded-full'></div>
                <p className='font-semibold text-[14px] text-center'>Pricing Plan</p>
            </Flex>
            <h1 className='font-semibold text-3xl md:text-5xl leading-tight pt-2.5'>Discover our flexible pricing plans for attendees</h1>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <Flex className='gap-7.5 pt-10 justify-between flex-wrap lg:flex-nowrap'>
              <div className='w-full lg:w-[32%] bg-[#F6F6F7] rounded-[20px] mt-10 p-6 md:p-8 transition-transform duration-300 ease-in-out hover:scale-105'>
                <div className='flex gap-4 items-center'>
                  <div className='bg-primary w-12.5 h-12.5 flex items-center justify-center rounded-[10px] shrink-0'>
                    <img src={pricing1} alt="" className='' />
                  </div>
                  <div>
                    <h4 className='text-[20px] font-semibold'>Basic Package</h4>
                    <p className='text-[16px] text-[#737681]'>Perfect for first-time attend</p>
                  </div>
                </div>
                <div className='flex items-baseline gap-2 mt-8'>
                  <h2 className='font-bold text-5xl'>$49</h2>
                  <h3 className='text-[#737681]'>/one time</h3>
                </div>
                <h2 className='mt-8 font-bold text-[20px]'>What's Included:</h2>
                <h3 className='mt-2 text-[16px] text-[#737681]'>It could relate to a subscription</h3>
                <ul className='mt-8 text-[#737681] space-y-4'>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Entry to all standard sessions</li>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Reserved seating in select session</li>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Meet & greet with speakers</li>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Premium networking lounge</li>
                </ul>
                <div className='mt-10 text-center'>
                  <Button className='w-full py-4 rounded-full'>Get Standard Pass</Button>
                </div>
              </div>

              <div className='w-full lg:w-[32%] bg-[#F6F6F7] rounded-[20px] mt-10 p-6 md:p-8 transition-transform duration-300 ease-in-out hover:scale-105'>
                <div className='flex gap-4 items-center'>
                  <div className='bg-primary w-12.5 h-12.5 flex items-center justify-center rounded-[10px] shrink-0'>
                    <img src={pricing1} alt="" className='' />
                  </div>
                  <div>
                    <h4 className='text-[20px] font-semibold'>Basic Package</h4>
                    <p className='text-[16px] text-[#737681]'>Perfect for first-time attend</p>
                  </div>
                </div>
                <div className='flex items-baseline gap-2 mt-8'>
                  <h2 className='font-bold text-5xl'>$49</h2>
                  <h3 className='text-[#737681]'>/one time</h3>
                </div>
                <h2 className='mt-8 font-bold text-[20px]'>What's Included:</h2>
                <h3 className='mt-2 text-[16px] text-[#737681]'>It could relate to a subscription</h3>
                <ul className='mt-8 text-[#737681] space-y-4'>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Entry to all standard sessions</li>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Reserved seating in select session</li>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Meet & greet with speakers</li>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Premium networking lounge</li>
                </ul>
                <div className='mt-10 text-center'>
                  <Button className='w-full py-4 rounded-full'>Get Standard Pass</Button>
                </div>
              </div>

              <div className='w-full lg:w-[32%] bg-[#F6F6F7] rounded-[20px] mt-10 p-6 md:p-8 transition-transform duration-300 ease-in-out hover:scale-105'>
                <div className='flex gap-4 items-center'>
                  <div className='bg-primary w-12.5 h-12.5 flex items-center justify-center rounded-[10px] shrink-0'>
                    <img src={pricing1} alt="" className='' />
                  </div>
                  <div>
                    <h4 className='text-[20px] font-semibold'>Basic Package</h4>
                    <p className='text-[16px] text-[#737681]'>Perfect for first-time attend</p>
                  </div>
                </div>
                <div className='flex items-baseline gap-2 mt-8'>
                  <h2 className='font-bold text-5xl'>$49</h2>
                  <h3 className='text-[#737681]'>/one time</h3>
                </div>
                <h2 className='mt-8 font-bold text-[20px]'>What's Included:</h2>
                <h3 className='mt-2 text-[16px] text-[#737681]'>It could relate to a subscription</h3>
                <ul className='mt-8 text-[#737681] space-y-4'>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Entry to all standard sessions</li>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Reserved seating in select session</li>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Meet & greet with speakers</li>
                  <li className='text-[16px] flex items-center gap-3'><i className="fa-solid fa-circle-check" style={{color: "rgb(115, 75, 223)"}}></i>Premium networking lounge</li>
                </ul>
                <div className='mt-10 text-center'>
                  <Button className='w-full py-4 rounded-full'>Get Standard Pass</Button>
                </div>
              </div>
            </Flex>
        </motion.div>
      </Container>
    </div>
    </>
  )
}

export default PricingPlan