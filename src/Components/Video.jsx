import React, { useState } from 'react'
import Vid from '../assets/Vid.png'
import VideoBg from '../assets/video.mp4'


const Video = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <div onClick={() => setShow(!show)} className='bg-[url(./assets/Figure.png)] bg-cover bg-center bg-no-repeat py-67.5 flex justify-center items-center'>
        <div className={`bg-primary rounded-full w-25 h-25 animate-double-pulse relative transition-transform duration-300 ease-in-out hover:scale-120 ${show ? 'hidden' : 'block'}`}>
          <img src={Vid} alt="Play Video"
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'   />

        </div>
        <video src={VideoBg} autoPlay controls className={`mx-auto w-300 h-200  ${show ? 'block' : 'hidden'}`}></video>
      </div>
    </>
  )
}

export default Video