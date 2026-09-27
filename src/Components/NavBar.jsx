import React from 'react'
import Logo from "../assets/Link.png"
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import { NavLink } from "react-router"

const NavBar = () => {
    return (
        <>
            <nav className='sticky top-0 left-0 w-full z-50 bg-[#0b0b1a]/90 backdrop-blur-md text-white py-6 border-b border-white/10 shadow-xl'>
                <Container>
                    <Flex className='justify-between items-center'>
                        <div>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <ul className='flex gap-8 items-center font-medium'>
                            <li>
                                <NavLink 
                                    to="/" 
                                    end 
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={({ isActive }) => isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-white transition duration-300"}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/about" 
                                    end 
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={({ isActive }) => isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-white transition duration-300"}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/schedule" 
                                    end 
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={({ isActive }) => isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-white transition duration-300"}
                                >
                                    Schedule
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/blog" 
                                    end 
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={({ isActive }) => isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-white transition duration-300"}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li className="text-gray-300 cursor-pointer hover:text-white transition duration-300">Pages</li>
                            <li>
                                <NavLink 
                                    to="/contact" 
                                    end 
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={({ isActive }) => isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-white transition duration-300"}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                        <Button className="bg-purple-600 hover:bg-purple-700 transition duration-300 text-white px-6 py-2.5 rounded-full shadow-lg shadow-purple-600/30">
                            Join the Conference
                        </Button>
                    </Flex>
                </Container>
            </nav>
        </>
    )
}

export default NavBar