import React, { useEffect, useState } from 'react'

const CountDown = () => {

    const conduct_date = '2026-12-12 12:00:00';
    const [count,setCount] = useState({})

    useEffect(()=>{
        setInterval(()=>{
            const targetDate = new Date(conduct_date).getTime();
            const currentDate = new Date().getTime();
            const difference = targetDate - currentDate;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setCount({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            })
        },1000)
    },[])

  return (
    <div className='flex gap-7.5 justify-center pt-10'>
        <div className='w-31.25 h-30 rounded-[20px] p-5 bg-[#ffffff17] backdrop-blur-md text-white text-center'>
            <h2 className='text-[40px] font-bold'>{count.days}</h2>
            <h5 className='pb-2'>Days</h5>
        </div>
        <div className='w-31.25 h-30 rounded-[20px] p-5 bg-[#ffffff17] backdrop-blur-md text-white text-center'>
            <h2 className='text-[40px] font-bold'>{count.hours}</h2>
            <h5 className='pb-2'>Hours</h5>
        </div>
        <div className='w-31.25 h-30 rounded-[20px] p-5 bg-[#ffffff17] backdrop-blur-md text-white text-center'>
            <h2 className='text-[40px] font-bold'>{count.minutes}</h2>
            <h5 className='pb-2'>Minutes</h5>
        </div>
        <div className='w-31.25 h-30 rounded-[20px] p-5 bg-[#ffffff17] backdrop-blur-md text-white text-center'>
            <h2 className='text-[40px] font-bold'>{count.seconds}</h2>
            <h5 className='pb-2'>Seconds</h5>
        </div>
    </div>
  )
}

export default CountDown