import React from 'react'
import Logo from "../assets/Link.png"
import Container from './Container'
import Flex from './Flex'
import Button from './Button'
import { NavLink } from "react-router";

const NavBar = () => {
    return (
        <>
            <nav className='absolute top-0 left-0 w-full backdrop-blur-md bg-[ffffff11] text-white py-6.25'>
                <Container>
                    <Flex className='justify-between items-center'>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <ul className='flex gap-5 items-center'>
                            <li>
                                <NavLink to="/" end>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" end>
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/schedule" end>
                                    Schedule
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog" end>
                                    Blog
                                </NavLink>
                            </li>
                            <li>Pages</li>
                            <li><NavLink to="/contact" end>
                                Contact Us
                            </NavLink></li>
                        </ul>
                        <Button>Join the Conference</Button>
                    </Flex>
                </Container>
            </nav>
        </>
    )
}

export default NavBar