import { create } from "zustand"
import { persist } from "zustand/middleware"

type UserInfo = {
    name: string | null,
    roomId: string | null,
     isConnected: boolean,
    createRoom: (roomData: any) => void,
     setConnected: (status: boolean) => void,
    logoutRoom: () => void
}

const RoomStore = create<UserInfo>()(
    persist(
        (set) => ({
            name: null,
            roomId: null,
 isConnected: false,
            createRoom: (roomData) => {
                set({
                    name: roomData.name,
                    roomId: roomData.roomId,
                      isConnected: true
                })
            },
            setConnected: (status) => {
                set({
                    isConnected: status
                })
            },
                logoutRoom: () => {
                set({
                    name: null,
                    roomId: null,
                    isConnected: false
                })
            }
        }),
        {
            name: "auth-storage"
        }
    )
)

export default RoomStore