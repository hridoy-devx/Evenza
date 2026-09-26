import React from 'react'
import Banner from '../Components/Banner'
import SmoothMarquee from '../Components/SmoothMarque'
import CoreFeature from '../Components/CoreFeature'
import OurSpeakers from '../Components/OurSpeakers'
import EventSchedule from '../Components/EventSchedule'
import PricingPlan from '../Components/PricingPlan'
import Video from '../Components/Video'
import FAQs from '../Components/FAQs'
import TestiMonial from '../Components/TestiMonial'
import LatestBlog from '../Components/LatestBlog'
import AboutUs from '../Components/AboutUs'



const Home = () => {
  return (
    <div>
     <Banner/>
     <SmoothMarquee/>
     <AboutUs/>
     <CoreFeature/>
     <OurSpeakers/>
     <EventSchedule/>
     <PricingPlan/>
     <Video/>
     <FAQs/>
    <TestiMonial/>
    <LatestBlog/>
    </div>
  )
}

export default Home