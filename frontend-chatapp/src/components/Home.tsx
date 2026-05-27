'use client'

import React from 'react'
import { motion } from "framer-motion";
import { useFormik } from 'formik';
import { useCreateRoom, useJoinRoom } from '@/Hooks/CreateRoomHook';
import RoomStore from '@/store/RoomData';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { joinChat } from '@/services/CraeteRoomService';

const Home = () => {
  const createRoomData=RoomStore(state=>state.createRoom)
  const setConneectRoom=RoomStore(state=>state.setConnected)
  const {mutate}=useCreateRoom()
  const { mutate: joinRoom } = useJoinRoom()
  const navigate=useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      roomId: ''
    },

    validate: (values) => {
      const errors: any = {};

      if (!values.name) {
        errors.name = "Username is required";
      }

      if (!values.roomId) {
        errors.roomId = "Room ID is required";
      }

      return errors; // IMPORTANT
    },

    onSubmit: (values) => {
      mutate(values)
      createRoomData({
        name:values.name,
        roomId:values.roomId
      })
      setConneectRoom(true)
      navigate.refresh()
      navigate.replace("/chat")
    }
  });
   const handelJoinChat=()=>{
       joinRoom(formik.values.roomId, {

        onSuccess: () => {

            createRoomData({
                name: formik.values.name,
                roomId: formik.values.roomId
            })

            setConneectRoom(true)
             navigate.refresh()
            navigate.replace("/chat")
        }
    })
   }
  return (
    <div className='min-h-screen bg-linear-to-br from-black via-slate-950 to-gray-900 flex justify-center items-center px-4 overflow-hidden'>

      {/* Background Blur Effects */}
      <div className='absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-10 left-10'></div>
      <div className='absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl bottom-10 right-10'></div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className='relative z-10 w-full max-w-md'
      >

        <div className='backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8'>

          {/* Heading */}
          <div className='text-center mb-8'>
            <h1 className='text-4xl font-bold text-white'>
              Welcome Back
            </h1>

            <p className='text-gray-400 mt-2 text-sm'>
              Join an existing room or create a new one
            </p>
          </div>

          {/* Form */}
          <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>

            {/* Name */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-gray-300'>
                Your Name
              </label>

              <input
                type="text"
                placeholder='Enter your name'
                name='name'
                onChange={formik.handleChange}
                value={formik.values.name}
                className='bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all'
              />

              {
                formik.errors.name && (
                  <p className='text-red-500 text-sm'>
                    {formik.errors.name}
                  </p>
                )
              }
            </div>

            {/* Room ID */}
            <div className='flex flex-col gap-2'>
              <label className='text-sm text-gray-300'>
                Room ID
              </label>

              <input
                type="text"
                placeholder='Enter room id'
                name='roomId'
                onChange={formik.handleChange}
                value={formik.values.roomId}
                className='bg-white/5 border border-white/10 text-white placeholder:text-gray-500 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all'
              />

              {
                formik.errors.roomId && (
                  <p className='text-red-500 text-sm'>
                    {formik.errors.roomId}
                  </p>
                )
              }
            </div>

            {/* Buttons */}
            <div className='flex gap-4 mt-4'>

              {/* Join Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(59,130,246,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                type='button'
                onClick={handelJoinChat}
                className='w-full bg-linear-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold cursor-pointer'
              >
                Join Room
              </motion.button>

              {/* Create Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 20px rgba(168,85,247,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                type='submit'
                className='w-full bg-linear-to-r from-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold cursor-pointer'
              >
                Create Room
              </motion.button>

            </div>

          </form>

          {/* Footer */}
          <p className='text-center text-gray-500 text-sm mt-8'>
            Fast • Secure • Realtime Connection
          </p>

        </div>
      </motion.div>
    </div>
  )
}

export default Home