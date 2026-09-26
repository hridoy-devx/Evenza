import React from 'react'
import Container from './Container'
import Event1 from '../assets/event1.png'
import Event2 from '../assets/event2.png'
import Event3 from '../assets/event3.png'

const EventThree = () => {
  return (
    <>
    <Container>
        <div className="w-full max-w-full h-35.25 flex justify-between items-center border-b-2 border-gray-50 px-4 py-px mx-auto">
            <div className="flex gap-5 items-center  ">
                <div>
                    <img src={Event3} alt="" />
                </div>
                <div className="text-white">
                    <p>9:00 AM - 5:30 PM</p>
                    <p>22 March 2025</p>
                </div>
            </div>
            <div className="w-120 text-white">
                <h3 className="font-bold text-[18px]">Professional Skills Development Workshop</h3>
                <p className="text-[14px]">Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
            </div>
            <div className="flex gap-5 items-center mt-8 mb-0 text-white">
                {/* <img src={} alt="" /> */}
                <p>Street, Block 12 Sector 4, Ipsum City</p>
            </div>
        </div>
        <div className="w-full max-w-full h-35.25 flex justify-between items-center border-b-2 border-gray-50 px-4 py-px mx-auto">
            <div className="flex gap-5 items-center  ">
                <div>
                    <img src={Event2} alt="" />
                </div>
                <div className="text-white">
                    <p>9:00 AM - 5:30 PM</p>
                    <p>22 March 2025</p>
                </div>
            </div>
            <div className="w-120 text-white">
                <h3 className="font-bold text-[18px]">Professional Skills Development Workshop</h3>
                <p className="text-[14px]">Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
            </div>
            <div className="flex gap-5 items-center mt-8 mb-0 text-white">
                {/* <img src={} alt="" /> */}
                <p>Street, Block 12 Sector 4, Ipsum City</p>
            </div>
        </div>

        <div className="w-full max-w-full h-35.25 flex justify-between items-center border-b-2 border-gray-50 px-4 py-px mx-auto">
            <div className="flex gap-5 items-center  ">
                <div>
                    <img src={Event1} alt="" />
                </div>
                <div className="text-white">
                    <p>9:00 AM - 5:30 PM</p>
                    <p>22 March 2025</p>
                </div>
            </div>
            <div className="w-120 text-white">
                <h3 className="font-bold text-[18px]">Professional Skills Development Workshop</h3>
                <p className="text-[14px]">Unlock your potential and elevate your career with our Professional Skills Development designed students, working professionals.</p>
            </div>
            <div className="flex gap-5 items-center mt-8 mb-0 text-white">
                {/* <img src={} alt="" /> */}
                <p>Street, Block 12 Sector 4, Ipsum City</p>
            </div>
        </div>
    </Container>
    </>
  )
}

export default EventThree