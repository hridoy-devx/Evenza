
import React from 'react'
import Container from './Container'
import Flex from './Flex'
import FooterLogo from '../assets/logo.png'

const Footer = () => {
    return (
        <>
            <div className='bg-[url(./assets/Footer.png)] bg-cover bg-center bg-no-repeat pt-25 overflow-x-hidden'>
                <Container>
                    {/* Newsletter Section */}
                    <Flex className='justify-between items-center flex-wrap lg:flex-nowrap gap-8'>
                        <h2 className='text-white w-full lg:w-[55%] font-semibold text-3xl md:text-[42px] leading-tight'>
                            Join our newsletter for event important announcement
                        </h2>
                        <div className='w-full lg:w-[40%]'>
                            <p className='text-white text-sm md:text-base'>Stay informed with instant updates delivered straight to your inbox.</p>
                            <div className='relative mt-5'>
                                <input type="email" placeholder="Enter your email" className='bg-white/10 w-full rounded-full px-6 py-4 text-white placeholder-gray-400 outline-none border border-white/20' />
                                <button className='absolute right-2 top-1/2 -translate-y-1/2 bg-primary px-6 py-2.5 rounded-full text-white font-semibold'>Subscribe</button>
                            </div>
                        </div>
                    </Flex>

                    {/* Divider Line */}
                    <div className='mt-16 w-full h-px bg-gray-500/50'></div>

                    {/* Footer Main Links Section */}
                    <Flex className='mt-16 justify-between flex-wrap lg:flex-nowrap gap-10'>
                        <div className='w-full lg:w-[30%]'>
                            <img src={FooterLogo} alt="Evenza Logo" className='h-8' />
                            <p className='text-white mt-6 text-sm md:text-base leading-relaxed'>
                                Experience a world-class conference designed to inspire innovation, empower professionals, and connect leaders from around the globe.
                            </p>
                            {/* Social Icons */}
                            <Flex className='gap-4 mt-6 text-white'>
                                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary cursor-pointer transition-all'>
                                    <i className="fa-brands fa-pinterest-p"></i>
                                </div>
                                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary cursor-pointer transition-all'>
                                    <i className="fa-brands fa-twitter"></i>
                                </div>
                                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary cursor-pointer transition-all'>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary cursor-pointer transition-all'>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                            </Flex>
                        </div>

                        <div className='w-full lg:w-[65%] flex justify-between flex-wrap gap-8'>
                            <ul className='text-white'>
                                <li className='text-[20px] font-semibold mb-4'>Quick Links</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>Home</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>About Us</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>Speakers</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>Events</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>Contact Us</li>
                            </ul>

                            <ul className='text-white'>
                                <li className='text-[20px] font-semibold mb-4'>Schedules</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>Event Management</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>Live Streaming</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>Virtual Event Setup</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>Keynote Sessions</li>
                                <li className='mt-2.5 hover:text-primary cursor-pointer transition-colors'>Networking Programs</li>
                            </ul>

                            <ul className='text-white max-w-[250px]'>
                                <li className='text-[20px] font-semibold mb-4'>Get In Touch</li>
                                <li className='mt-2.5'>+00 123 456 789</li>
                                <li className='mt-2.5'>support@domainname.com</li>
                                <li className='mt-2.5 leading-relaxed'>45/2 Central Business Innovation Near International Trade Tower</li>
                            </ul>
                        </div>
                    </Flex>

                    {/* Copyright Section */}
                    <div className='mt-16 py-6 border-t border-gray-500/30 text-center'>
                        <p className='text-white/70 text-sm'>Copyright © 2025 All Rights Reserved.</p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer