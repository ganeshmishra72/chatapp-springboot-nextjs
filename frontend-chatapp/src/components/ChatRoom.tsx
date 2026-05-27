'use client'

import React, {
  useEffect,
  useRef,
  useState
} from 'react'

import { motion } from "framer-motion"

import {
  FiLogOut,
  FiPaperclip,
  FiSend
} from 'react-icons/fi'

import RoomStore from '@/store/RoomData'

import { useRouter } from 'next/navigation'

import SockJS from 'sockjs-client'

import { Client } from '@stomp/stompjs'

import toast from 'react-hot-toast'

import { getMessages } from '@/services/CraeteRoomService'
import { timeAgo } from '@/config/helper'

type ChatMessage = {
  sender: string
  content: string
  roomId: string
  timeStamp: string
}

const getAvatar = (name: string) => {
  return `https://api.dicebear.com/7.x/adventurer/svg?seed=${name}`
}

const ChatRoom = () => {

  const roomId: string | null =
    RoomStore(state => state.roomId)

  const username =
    RoomStore(state => state.name)

  const connected =
    RoomStore(state => state.isConnected)

  const logoutRoom =
    RoomStore(state => state.logoutRoom)

  const navigate = useRouter()

  const [input, setInput] =
    useState("")

  const [messages, setMessages] =
    useState<ChatMessage[]>([])

  const [stompClient, setStompClient] =
    useState<Client | null>(null)

  const chatBoxRef =
    useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    const loadMessages = async () => {

      try {

        if (!roomId) return

        const response = await getMessages(roomId)

        setMessages(response || [])

      } catch (error) {

        console.log(error)

        toast.error("Failed to load messages")
      }
    }

    loadMessages()

  }, [roomId])

  useEffect(() => {

    if (chatBoxRef.current) {

      chatBoxRef.current.scrollTop =
        chatBoxRef.current.scrollHeight
    }

  }, [messages])

  useEffect(() => {

    if (!roomId) return

    const socket = new SockJS(
      "http://localhost:8080/chat"
    )

    const client = new Client({

      webSocketFactory: () => socket,

      reconnectDelay: 5000,

      debug: (str) => {
        console.log(str)
      },

      onConnect: () => {

        toast.success("Connected")

        setStompClient(client)

        client.subscribe(

          `/topic/room/${roomId}`,

          (payload) => {

            const newMessage =
              JSON.parse(payload.body)

            setMessages((prev) => [
              ...prev,
              newMessage
            ])
          }
        )
      },

      onStompError: (frame) => {

        console.log(frame)

        toast.error(
          "Connection Failed"
        )
      }
    })

    client.activate()

    return () => {

      client.deactivate()
    }

  }, [roomId])

  const handelSendMessage = () => {

    if (
      !stompClient ||
      !connected ||
      !input.trim()
    ) {
      return
    }

    const message: ChatMessage = {

      sender: username || "",

      content: input,

      roomId: roomId || "",

      timeStamp: new Date().toISOString()
    }

    stompClient.publish({

      destination:
        `/app/sendMessage/${roomId}`,

      body: JSON.stringify(message)
    })

    setInput("")
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {

    if (e.key === "Enter") {

      handelSendMessage()
    }
  }

  const logoutChat = () => {

    if (stompClient) {

      stompClient.deactivate()
    }

    logoutRoom()

    navigate.replace("/")
  }

  return (

    <div className='min-h-screen bg-linear-to-br from-black via-slate-950 to-gray-900 text-white overflow-hidden'>

      <motion.nav
        initial={{
          y: -80,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        className='fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10'
      >

        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>

          <div className='flex items-center gap-2'>

            <span className='text-gray-400 text-sm'>
              Room:
            </span>

            <div className='bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-xl font-medium'>

              {roomId}

            </div>

          </div>

          <div className='hidden md:flex items-center gap-3'>

            <img
              src={getAvatar(username || "User")}
              alt="avatar"
              className='w-10 h-10 rounded-full border border-white/20'
            />

            <div className='bg-purple-500/10 border border-purple-500/20 text-purple-400 px-4 py-2 rounded-xl font-medium'>

              {username}

            </div>

          </div>

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={logoutChat}
            className='flex items-center gap-2 bg-red-600 px-5 py-2 rounded-xl font-semibold cursor-pointer'
          >

            <FiLogOut size={18} />

            Leave

          </motion.button>

        </div>

      </motion.nav>

      <div className='pt-28 px-4 md:px-8 h-screen flex flex-col'>

        <div
          ref={chatBoxRef}
          className='flex-1 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 overflow-y-auto no-scrollbar shadow-2xl'
        >

          <div className='flex flex-col gap-4'>

            {
              messages.map((msg, index) => {

                const isMine =
                  msg.sender === username

                return (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: isMine ? 30 : -30
                    }}
                    animate={{
                      opacity: 1,
                      x: 0
                    }}
                    className={`
                      flex items-end gap-3
                      ${isMine
                        ? "justify-end"
                        : "justify-start"
                      }
                    `}
                  >

                    {!isMine && (

                      <img
                        src={getAvatar(msg.sender)}
                        alt={msg.sender}
                        className='w-10 h-10 rounded-full border border-white/20'
                      />
                    )}

                    <div
                      className={`
                        max-w-xs p-4 rounded-2xl

                        ${isMine
                          ? "bg-linear-to-r from-blue-600 to-cyan-500"
                          : "bg-white/10 border border-white/10"
                        }
                      `}
                    >

                      <p className='text-sm text-blue-200 mb-1 font-medium'>

                        {
                          isMine
                            ? "You"
                            : msg.sender
                        }

                      </p>

                      <p className='wrap-break-word'>

                        {msg.content}

                      </p>

                      <p className='text-xs text-gray-200 mt-2 text-right'>

                        {timeAgo(msg.timeStamp)}

                      </p>

                    </div>

                    {isMine && (

                      <img
                        src={getAvatar(msg.sender)}
                        alt={msg.sender}
                        className='w-10 h-10 rounded-full border border-white/20'
                      />
                    )}

                  </motion.div>
                )
              })
            }

          </div>

        </div>

        <div className='mt-4 mb-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-3 flex gap-3'>

          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder='Type your message...'
            className='flex-1 bg-transparent text-white placeholder:text-gray-500 px-4 focus:outline-none'
          />

          <div className='flex gap-4'>

            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
           onClick={() => {
    toast("🚧 This feature is under construction and will be available soon.")
}}
              className='flex items-center justify-center px-3'
            >

              <FiPaperclip size={20} />

            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={handelSendMessage}
              className='bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-3 rounded-xl font-semibold cursor-pointer'
            >

              <FiSend size={18} />

            </motion.button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ChatRoom