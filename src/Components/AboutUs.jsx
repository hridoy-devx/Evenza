import React from 'react'
import Container from './Container'
import Flex from './Flex'
import AboutImg from '../assets/aboutUs.png'
import Button from './Button'
import NavBar from './NavBar'
import Icon1 from '../assets/iconone.png'
import Icon2 from '../assets/icontwo.png'
import Icon3 from '../assets/iconthree.png'

const AboutUs = () => {
    return (
        <>
            <Container>
                <NavBar/>
                <Flex className="flex-wrap lg:flex-nowrap justify-between">
                    <div className='w-full lg:w-[678px] pt-25'>
                        <img src={AboutImg} alt="About Us" className="w-full h-auto" />
                    </div>
                    <div className='pt-25'>
                        <Flex className="items-center">
                            <div className='h-1.5 w-1.5 bg-primary rounded-full my-auto'></div>
                            <p className='font-semibold text-[14px] text-black ml-2'>About Us</p>
                        </Flex>
                        <h1 className='text-[48px] font-semibold leading-[52px] pt-15'>Behind this event</h1>
                        <p className='text-[16px] max-w-[663px] leading-[25px] pt-4.5'>Discover the vision that drives this event—a commitment to bringing together innovators,
                            leaders, and changemakers to share knowledge, spark inspiration, and create meaningful
                            connections.</p>
                        <p className='text-[16px] max-w-[663px] leading-[25px] pt-4.5'>Our vision is to build a global community where collaboration fuels innovation we aim encourage
                            fresh thinking, spark inspiring dialogues, and create a space.</p>
                        
                        <Flex className='max-w-[663px] shadow-lg p-4 rounded-lg mt-6 gap-6'>
                            <Flex className='gap-4 items-center'>
                                <img src={Icon1} alt="Icon 1" />
                                <h1 className='text-[20px] font-bold'>Receive real-time event updates.</h1>
                            </Flex>
                            <Flex className='gap-4 items-center'>
                                <img src={Icon2} alt="Icon 2" />
                                <h1 className='text-[20px] font-bold'>Receive real-time event updates.</h1>
                            </Flex>
                        </Flex>

                        <Flex className='pt-10 gap-4 items-center flex-wrap'>
                            <Button>Learn More About</Button>
                            <Flex className='gap-4 items-center'>
                                <img src={Icon3} alt="Icon 3" />
                                <div className='w-[190px]'>
                                    <h2 className='text-[20px] font-bold text-black'>Call now</h2>
                                    <p className='text-[18px]'>+00 123 456 789</p>
                                </div>
                            </Flex>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </>
    )
}

export default AboutUs