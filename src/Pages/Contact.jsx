import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Button from '../Components/Button'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-[#120f2e] via-[#0b0b1a] to-[#0b0b1a] text-white pt-28 pb-24 min-h-screen overflow-hidden">
      <Container>
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase">Contact Us</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-2 mb-4">Get in Touch with Our Team</h2>
          <p className="text-gray-300 text-sm">
            Have questions about the conference, registration, or schedule? Send us a message and we’ll get back to you shortly.
          </p>
        </motion.div>

        <Flex className="flex-col lg:flex-row gap-10 justify-between items-start">
          {/* Left Side: Contact Info with Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-5/12 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-300 text-sm mb-8">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 text-xl">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Phone Number</h4>
                  <p className="text-lg font-medium">+880 1933-125141</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Email Address</h4>
                  <p className="text-lg font-medium">hridoy-devx@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Location</h4>
                  <p className="text-lg font-medium">Joydebpur, Gazipur, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form with Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full lg:w-7/12 bg-white/5 backdrop-blur-md p-8 lg:p-10 rounded-2xl border border-white/10 shadow-xl"
          >
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Abdul Kadir Hridoy" 
                    className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="hridoy-devx@gmail.com" 
                    className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help you?" 
                  className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Write your message here..." 
                  className="w-full bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none transition duration-300"
                ></textarea>
              </div>

              {/* Your custom Button component with hover scale effect */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full py-4 bg-purple-600 hover:bg-purple-700 transition duration-300 rounded-lg text-white font-semibold text-center cursor-pointer shadow-lg shadow-purple-600/30">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </Flex>
      </Container>
    </section>
  )
}

export default Contact