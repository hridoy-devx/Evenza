import React from 'react'
import Container from './Container'
import Event1 from '../assets/event1.png'
import Event2 from '../assets/event2.png'

const EventTwo = () => {
  return (
    <>
    <Container>
        <div className="w-full max-w-[1250px] h-auto md:h-35.25 flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-50 px-4 py-4 md:py-px mx-auto gap-4">
            <div className="flex gap-5 items-center w-full md:w-auto">
                <div>
                    <img src={Event2} alt="" />
                </div>
                <div className="text-white">
                    <p>9:00 AM - 5:30 PM</p>
                    <p>22 March 2025</p>
                </div>
            </div>
            <div className="w-full md:w-120 text-white">
                <h3 className="font-bold text-[18px]">Professional Skills Development Workshop</h3>
                <p className="text-[14px]">Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
            </div>
            <div className="flex gap-5 items-center text-white w-full md:w-auto justify-start md:justify-end">
                <p>Street, Block 12 Sector 4, Ipsum City</p>
            </div>
        </div>
        
        <div className="w-full max-w-[1250px] h-auto md:h-35.25 flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-50 px-4 py-4 md:py-px mx-auto gap-4">
            <div className="flex gap-5 items-center w-full md:w-auto">
                <div>
                    <img src={Event1} alt="" />
                </div>
                <div className="text-white">
                    <p>9:00 AM - 5:30 PM</p>
                    <p>22 March 2025</p>
                </div>
            </div>
            <div className="w-full md:w-120 text-white">
                <h3 className="font-bold text-[18px]">Professional Skills Development Workshop</h3>
                <p className="text-[14px]">Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
            </div>
            <div className="flex gap-5 items-center text-white w-full md:w-auto justify-start md:justify-end">
                <p>Street, Block 12 Sector 4, Ipsum City</p>
            </div>
        </div>
    </Container>
    </>
  )
}

export default EventTwo