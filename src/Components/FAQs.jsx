import React, { useState } from 'react'
import FaqImg from '../assets/faqs.png'
import Container from './Container'
import Flex from './Flex'
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";

const FAQs = () => {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [show5, setShow5] = useState(false)
  return (
    <>
      <div>
        <Container>
          <Flex className='py-25 gap-11'>
            <div className='w-[40%]'>
              <img src={FaqImg} alt="" />
            </div>
            <div className='w-[60%]'>
              <Flex className='gap-2'>
                <div className='h-1.5 w-1.5 bg-primary rounded-full my-auto'></div>
                <p className='font-semibold text-[14px] text-secondary text-center'>FAQs</p>
              </Flex>
              <h1 className='text-secondary font-semibold text-5xl leading-13 pt-2.5 w-200'>What our customers say about their
                experience</h1>
              <div className='mt-9'>
                <div onClick={() => setShow(!show)} className='px-6.25 py-5.75 rounded-[20px] bg-[#F6F6F7]'>
                  <h2 className='flex justify-between'>1. How does the complete event register process actually work?
                    {
                      show ?
                        <FiMinusCircle className='text-2xl text-primary' />
                        :
                        <FiPlusCircle className='text-2xl text-primary' />
                    } </h2>
                  {
                    show ?
                      <div className='bg-[#F6F6F7] px-6.25 py-5.75'>
                        <p>Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                          interest you most, and customize your learning experience throughout the day.</p>
                      </div>
                      : null
                  }
                </div>
                <div onClick={() => setShow2(!show2)} className='mt-7.5 px-6.25 py-5.75 rounded-[20px] bg-[#F6F6F7]'>
                  <h2 className='flex justify-between'>2. Where is the main event venue located precisely?
                    {
                      show2 ?
                        <FiMinusCircle className='text-2xl text-primary' />
                        :
                        <FiPlusCircle className='text-2xl text-primary' />
                    } </h2>
                  {
                    show2 ?
                      <div className='bg-[#F6F6F7] px-6.25 py-5.75'>
                        <p>Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                          interest you most, and customize your learning experience throughout the day.</p>
                      </div>
                      : null
                  }
                </div>
                <div onClick={() => setShow3(!show3)} className='mt-7.5 px-6.25 py-5.75 rounded-[20px] bg-[#F6F6F7]'>
                  <h2 className='flex justify-between'>3. Can attendees freely switch between sessions and tracks?
                    {
                      show3 ?
                        <FiMinusCircle className='text-2xl text-primary' />
                        :
                        <FiPlusCircle className='text-2xl text-primary' />
                    } </h2>
                  {
                    show3 ?
                      <div className='bg-[#F6F6F7] px-6.25 py-5.75'>
                        <p>Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                          interest you most, and customize your learning experience throughout the day.</p>
                      </div>
                      : null
                  }
                </div>
                <div onClick={() => setShow4(!show4)} className='mt-7.5 px-6.25 py-5.75 rounded-[20px] bg-[#F6F6F7]'>
                  <h2 className='flex justify-between'>4. Does the event provide virtual participation options online?
                    {
                      show4 ?
                        <FiMinusCircle className='text-2xl text-primary' />
                        :
                        <FiPlusCircle className='text-2xl text-primary' />
                    } </h2>
                  {
                    show4 ?
                      <div className='bg-[#F6F6F7] px-6.25 py-5.75'>
                        <p>Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                          interest you most, and customize your learning experience throughout the day.</p>
                      </div>
                      : null
                  }
                </div>
                <div onClick={() => setShow5(!show5)} className='mt-7.5 px-6.25 py-5.75 rounded-[20px] bg-[#F6F6F7]'>
                  <h2 className='flex justify-between'>5. What is the event refund and cancellation policy?
                    {
                      show5 ?
                        <FiMinusCircle className='text-2xl text-primary' />
                        :
                        <FiPlusCircle className='text-2xl text-primary' />
                    } </h2>
                  {
                    show5 ?
                      <div className='bg-[#F6F6F7] px-6.25 py-5.75'>
                        <p>Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that
                          interest you most, and customize your learning experience throughout the day.</p>
                      </div>
                      : null
                  }
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default FAQs