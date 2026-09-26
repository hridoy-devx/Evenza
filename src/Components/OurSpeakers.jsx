import React from 'react'
import Container from './Container'
import Flex from './Flex'
import speakerone from '../assets/speakeruno.png'
import speakertwo from '../assets/speakerdos.png'
import speakerthree from '../assets/speakertres.png'

const OurSpeakers = () => {
    return (
        <>
            <div className='bg-white py-25 overflow-x-hidden'>
                <Container>
                    <div className='max-w-3xl mx-auto text-black'>
                        <Flex className='gap-4 justify-center items-center'>
                            <div className='h-1.5 w-1.5 bg-primary rounded-full'></div>
                            <p className='font-semibold text-[14px] text-center'>Our Speakers</p>
                        </Flex>
                        <h1 className='text-center font-semibold text-3xl md:text-5xl leading-tight pt-2.5'>Introducing the expert speakers</h1>
                    </div>
                    <Flex className='pt-22.5 gap-7.5 justify-between'>
                        <div className='w-[32%]'>
                            <img src={speakerone} alt="" className='w-full object-cover' />
                            <h3 className='text-[20px] font-semibold pt-7 text-black'>Sophia Rodrigues</h3>
                            <p className='text-[16px] pt-3 text-gray-700'>Global Marketing Director</p>
                        </div>
                        <div className='w-[32%]'>
                            <img src={speakertwo} alt="" className='w-full object-cover' />
                            <h3 className='text-[20px] font-semibold pt-7 text-black'>Jacob Jones</h3>
                            <p className='text-[16px] pt-3 text-gray-700'>Lead AI Research Scientist</p>
                        </div>
                        <div className='w-[32%]'>
                            <img src={speakerthree} alt="" className='w-full object-cover' />
                            <h3 className='text-[20px] font-semibold pt-7 text-black'>Arlene McCoy</h3>
                            <p className='text-[16px] pt-3 text-gray-700'>Innovation Strategy Expert</p>
                        </div>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default OurSpeakers