import React from 'react'
import Video from '../assets/tri.svg'
import Flex from './Flex'
import Container from './Container'
import Button from './Button'
import CountDown from './CountDown'

const Banner = () => {
    return (
        <>  
            <div className='bg-[url(./assets/banner.png)] bg-cover bg-center bg-no-repeat py-37.5'>
                <Container>
                    <div className='text-white text-center'>
                        <h1 className='text-[76px] leading-20.75 font-extrabold'>Connecting Minds to Shape
                            Tomorrow's Big Ideas</h1>
                        <p className='pt-3.75 pb-13'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—
                            exchanging ideas that spark growth, innovation, and meaningful change.</p>
                        <Flex className='justify-center gap-4 pb-15'>
                            <Button>Explore Schedule</Button>
                            <Flex className='gap-4 items-center'>
                                <div className='relative rounded-full w-10 h-10 bg-primary'>
                                    <img src={Video} alt="" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                                </div>
                                <a href="#">Watch</a>
                            </Flex>
                        </Flex>
                        <p>Upcoming Speaker Reveal - Don't Miss Out</p>
                        <CountDown/>
                        
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Banner