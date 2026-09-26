import React from 'react'
import Container from './Container'
import Flex from './Flex'
import TestBg from '../assets/testBg.png'
import Edwards from '../assets/edwards.png'
import Watson from '../assets/watson.png'
import Vector from '../assets/Vector.png'
import Vector3 from '../assets/Vector3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImport from "react-slick";
const Slider = SliderImport.default ?? SliderImport;

const TestiMonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div style={{ backgroundImage: `url(${TestBg})` }} className='bg-center bg-no-repeat bg-cover py-25 overflow-x-hidden'>
                <Container>
                    <div className='max-w-3xl mx-auto text-center'>
                        <Flex className='gap-4 justify-center items-center'>
                            <div className='h-1.5 w-1.5 bg-white rounded-full'></div>
                            <p className='font-semibold text-[14px] text-white'>Testimonials</p>
                        </Flex>
                        <h1 className='font-semibold text-3xl md:text-5xl text-white leading-tight pt-2.5'>What our customers say about their experience</h1>
                    </div>

                    <div className='mt-16 w-full'>
                        <Slider {...settings} className='w-full'>
                            <div className='px-3'>
                                <div className='w-full max-w-[350px] min-h-[420px] bg-primary rounded-[20px] p-8 mx-auto flex flex-col justify-between'>
                                    <div>
                                        <p className='text-[16px] text-white'>Over 15,000+ Attendees Connected Worldwide</p>
                                        <h4 className='mt-12 text-[20px] text-white font-bold'>Client Experience Speak For Themselves</h4>
                                    </div>
                                    <button className='w-full max-w-[180px] bg-white text-primary px-6 py-3 rounded-full font-semibold'>View All Reviews</button>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className='w-full max-w-[530px] bg-white/10 rounded-[20px] p-6 md:p-8 mx-auto'>
                                    <Flex className='gap-2 items-center'>
                                        <i className="fa-solid fa-star text-center" style={{ color: "rgb(115, 75, 223)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                    </Flex>
                                    <h2 className='mt-6 text-white font-semibold text-sm md:text-base leading-relaxed'>
                                        "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability."
                                    </h2>
                                    <div className='bg-gray-500 w-full h-px my-6'></div>
                                    <Flex className='justify-between items-center text-white'>
                                        <Flex className='gap-3 items-center'>
                                            <img src={Edwards} alt="" className='w-12 h-12 rounded-full object-cover' />
                                            <div>
                                                <h3 className='font-bold text-[18px]'>Ralph Edwards</h3>
                                                <p className='text-sm text-gray-300'>Global Marketing Director</p>
                                            </div>
                                        </Flex>
                                        <i className="fa-solid fa-quote-right text-[24px]" style={{ color: "rgb(115, 75, 223)" }}></i>
                                    </Flex>
                                </div>
                            </div>
                            <div className='px-3'>
                                <div className='w-full max-w-[530px] bg-white/10 rounded-[20px] p-6 md:p-8 mx-auto'>
                                    <Flex className='gap-2 items-center'>
                                        <i className="fa-solid fa-star text-center" style={{ color: "rgb(115, 75, 223)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                        <i className="fa-solid fa-star" style={{ color: "rgb(115, 75, 223)" }}></i>
                                    </Flex>
                                    <h2 className='mt-6 text-white font-semibold text-sm md:text-base leading-relaxed'>
                                        "Truly outstanding service! The team exceeded our expectations with their professionalism, creativity, and quick turnaround time. Highly recommended for anyone seeking quality and reliability."
                                    </h2>
                                    <div className='bg-gray-500 w-full h-px my-6'></div>
                                    <Flex className='justify-between items-center text-white'>
                                        <Flex className='gap-3 items-center'>
                                            <img src={Watson} alt="" className='w-12 h-12 rounded-full object-cover' />
                                            <div>
                                                <h3 className='font-bold text-[18px]'>Kristin Watson</h3>
                                                <p className='text-sm text-gray-300'>Global Marketing Director</p>
                                            </div>
                                        </Flex>
                                        <i className="fa-solid fa-quote-right text-[24px]" style={{ color: "rgb(115, 75, 223)" }}></i>
                                    </Flex>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    <Flex className='items-center justify-between mt-20 flex-wrap lg:flex-nowrap gap-4'>
                        <div className='bg-gray-500 flex-1 h-px hidden md:block'></div>
                        <p className='text-[18px] font-semibold text-white text-center'>Supported by Brands That Inspire Innovation</p>
                        <div className='bg-gray-500 flex-1 h-px hidden md:block'></div>
                    </Flex>

                    <Flex className='mt-12 gap-8 justify-center items-center flex-wrap'>
                        <Flex className='gap-2 items-center'>
                            <img src={Vector} alt="" className='w-10 h-10 rounded-full object-cover' />
                            <h3 className='font-bold text-[18px] text-white'>Logoipsum</h3>
                        </Flex>
                        <Flex className='gap-2 items-center'>
                            <img src={Vector} alt="" className='w-10 h-10 rounded-full object-cover' />
                            <h3 className='font-bold text-[18px] text-white'>Logoipsum</h3>
                        </Flex>
                        <Flex className='gap-2 items-center'>
                            <img src={Vector3} alt="" className='w-10 h-10 rounded-full object-cover' />
                            <h3 className='font-bold text-[18px] text-white'>Logoipsum</h3>
                        </Flex>
                        <Flex className='gap-2 items-center'>
                            <img src={Vector} alt="" className='w-10 h-10 rounded-full object-cover' />
                            <h3 className='font-bold text-[18px] text-white'>Logoipsum</h3>
                        </Flex>
                        <Flex className='gap-2 items-center'>
                            <img src={Vector} alt="" className='w-10 h-10 rounded-full object-cover' />
                            <h3 className='font-bold text-[18px] text-white'>Logoipsum</h3>
                        </Flex>
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default TestiMonial