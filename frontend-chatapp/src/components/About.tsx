'use client'

import React, { useState } from 'react'
import { motion } from "framer-motion";
import {
  FiMessageSquare,
  FiUsers,
  FiShield,
  FiZap,
  FiCode,
  FiGlobe,
  FiGithub,
  FiMail,
  FiCheckCircle
} from "react-icons/fi";

const About = () => {
    const [showContact, setShowContact] = useState(false)
  const features = [
    {
      icon: <FiZap size={24} />,
      title: "Realtime Messaging",
      desc: "Instant communication powered by WebSocket and STOMP protocol."
    },
    {
      icon: <FiUsers size={24} />,
      title: "Room Based Chat",
      desc: "Create private chat rooms and invite users using unique Room IDs."
    },
    {
      icon: <FiShield size={24} />,
      title: "Secure Connection",
      desc: "Fast and secure realtime communication experience."
    },
    {
      icon: <FiGlobe size={24} />,
      title: "Responsive Design",
      desc: "Fully responsive UI that works perfectly on all devices."
    }
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Spring Boot",
    "MongoDB",
    "WebSocket",
    "STOMP",
    "Docker"
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white overflow-hidden relative'>

      {/* Blur Effects */}
      <div className='absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full'></div>
      <div className='absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full'></div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 py-20'>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >

          <div className='flex justify-center mb-6'>
            <div className='p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl'>
              <FiMessageSquare size={50} className='text-cyan-400' />
            </div>
          </div>

          <h1 className='text-5xl md:text-6xl font-bold'>
            About ChatSphere
          </h1>

          <p className='text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8'>
            ChatSphere is a modern realtime chat application built for seamless
            communication. Create rooms, join conversations instantly, and enjoy
            a smooth messaging experience with modern UI and realtime technology.
          </p>

        </motion.div>

        {/* Features Section */}
        <div className='mt-24'>

          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold'>
              Features
            </h2>

            <p className='text-gray-400 mt-3'>
              Everything you need for realtime communication
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

            {
              features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-cyan-400/40 transition-all'
                >

                  <div className='text-cyan-400 mb-4'>
                    {feature.icon}
                  </div>

                  <h3 className='text-xl font-semibold mb-3'>
                    {feature.title}
                  </h3>

                  <p className='text-gray-400 text-sm leading-7'>
                    {feature.desc}
                  </p>

                </motion.div>
              ))
            }

          </div>
        </div>

        {/* Technologies */}
        <div className='mt-24'>

          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold'>
              Tech Stack
            </h2>

            <p className='text-gray-400 mt-3'>
              Modern technologies used to build this platform
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-4'>

            {
              technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className='px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/40 transition-all'
                >
                  {tech}
                </motion.div>
              ))
            }

          </div>

        </div>

        {/* Why Choose */}
        <div className='mt-24'>

          <div className='bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-10'>

            <div className='text-center mb-10'>
              <h2 className='text-4xl font-bold'>
                Why Choose ChatSphere?
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

              <div className='space-y-5'>

                <div className='flex gap-4 items-start'>
                  <FiCheckCircle className='text-green-400 mt-1' size={22} />

                  <div>
                    <h3 className='font-semibold text-lg'>
                      Lightning Fast Messaging
                    </h3>

                    <p className='text-gray-400 text-sm mt-1'>
                      Messages are delivered instantly without page refresh.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4 items-start'>
                  <FiCheckCircle className='text-green-400 mt-1' size={22} />

                  <div>
                    <h3 className='font-semibold text-lg'>
                      Beautiful Modern UI
                    </h3>

                    <p className='text-gray-400 text-sm mt-1'>
                      Glassmorphism inspired interface with smooth animations.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4 items-start'>
                  <FiCheckCircle className='text-green-400 mt-1' size={22} />

                  <div>
                    <h3 className='font-semibold text-lg'>
                      Easy Room Access
                    </h3>

                    <p className='text-gray-400 text-sm mt-1'>
                      Join any room instantly using a Room ID.
                    </p>
                  </div>
                </div>

              </div>

              <div className='space-y-5'>

                <div className='flex gap-4 items-start'>
                  <FiCheckCircle className='text-green-400 mt-1' size={22} />

                  <div>
                    <h3 className='font-semibold text-lg'>
                      Full Stack Architecture
                    </h3>

                    <p className='text-gray-400 text-sm mt-1'>
                      Built using scalable frontend and backend technologies.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4 items-start'>
                  <FiCheckCircle className='text-green-400 mt-1' size={22} />

                  <div>
                    <h3 className='font-semibold text-lg'>
                      Mobile Responsive
                    </h3>

                    <p className='text-gray-400 text-sm mt-1'>
                      Optimized experience for desktop, tablet, and mobile.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4 items-start'>
                  <FiCheckCircle className='text-green-400 mt-1' size={22} />

                  <div>
                    <h3 className='font-semibold text-lg'>
                      Smooth Animations
                    </h3>

                    <p className='text-gray-400 text-sm mt-1'>
                      Framer Motion animations for premium user experience.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Developer Section */}
        <div className='mt-24'>

          <div className='text-center mb-10'>
            <h2 className='text-4xl font-bold'>
              Developer
            </h2>

            <p className='text-gray-400 mt-3'>
              Crafted with passion and modern technologies
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='max-w-3xl mx-auto bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] p-10 text-center'
          >

            <div className='w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto flex items-center justify-center text-3xl font-bold'>
              RM
            </div>

            <h3 className='text-3xl font-bold mt-6'>
              Raghvendra Mishra
            </h3>

            <p className='text-gray-400 mt-4 leading-8'>
              Java Full Stack Developer   building modern realtime
              applications using scalable technologies and clean UI/UX.
            </p>

            <div className='flex justify-center gap-5 mt-8'>

            <button
  onClick={() => window.open("https://github.com/ganeshmishra72", "_blank")}
  className='flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all cursor-pointer'
>
  <FiGithub />
  GitHub
</button>

<button
  onClick={() => setShowContact(true)}
  className='flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition-all cursor-pointer'
>
  <FiMail />
  Contact
</button>
{
  showContact && (
    <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4'>

      <div className='w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl p-8 relative'>

        {/* Close Button */}
        <button
          onClick={() => setShowContact(false)}
          className='absolute top-4 right-4 text-gray-400 hover:text-white text-xl cursor-pointer'
        >
          ✕
        </button>

        <h2 className='text-3xl font-bold text-white text-center'>
          Contact Me
        </h2>

        <p className='text-gray-400 text-center mt-2'>
          Connect with me through these platforms
        </p>

        <div className='flex flex-col gap-4 mt-8'>

          {/* Gmail */}
          <div className='bg-white/5 border border-white/10 rounded-2xl p-4'>
            <p className='text-gray-400 text-sm'>Email</p>
            <p className='text-white font-medium'>
              raghvendra0550@gmail.com
            </p>
          </div>

          {/* GitHub */}
          <button
            onClick={() =>
              window.open("https://github.com/ganeshmishra72", "_blank")
            }
            className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 py-3 rounded-xl font-semibold text-white cursor-pointer'
          >
            Open GitHub
          </button>

          {/* LinkedIn */}
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/raghvendramishra05/", "_blank")
            }
            className='w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold text-white cursor-pointer'
          >
            Open LinkedIn
          </button>

        </div>

      </div>

    </div>
  )
}

            </div>

          </motion.div>

        </div>

        {/* Footer */}
        <div className='mt-24 text-center border-t border-white/10 pt-8'>

          <p className='text-gray-500 text-sm'>
            © 2026 ChatSphere • Built with ❤️ using Next.js & Spring Boot
          </p>

        </div>

      </div>
    </div>
  )
}

export default About