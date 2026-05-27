import { createRoom, joinChat } from "@/services/CraeteRoomService"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import toast from "react-hot-toast"

export const useCreateRoom = () => {

    return useMutation({

        mutationFn: createRoom,

        onSuccess: (value) => {

            toast.success("Create Room Successfully")
            console.log(value)

        },

        onError: (error) => {

            if (axios.isAxiosError(error)) {

                // Backend Down / Cancelled / Network Error
                if (
                    error.code === "ERR_NETWORK" ||
                    error.code === "ERR_CANCELED" ||
                    !error.response
                ) {
                    toast.error("Backend server down, please wait...")
                    return
                }

                const message =
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    "Update Failed"

                toast.error(message)
            }
        }
    })
}

export const useJoinRoom = () => {

    return useMutation({

        mutationFn: joinChat,

        onSuccess: () => {
            toast.success("Joined Room Successfully")
        },

        onError: (error) => {

            if (axios.isAxiosError(error)) {

                // Backend Down / Cancelled / Network Error
                if (
                    error.code === "ERR_NETWORK" ||
                    error.code === "ERR_CANCELED" ||
                    !error.response
                ) {
                    toast.error("Backend server down, please wait...")
                    return
                }

                const message =
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    "Room Not Found"

                toast.error(message)
            }
        }
    })
}