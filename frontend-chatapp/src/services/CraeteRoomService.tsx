import apicall from "@/config/ApiClient"

export const createRoom=async(roomDeatils:any)=>{
     const response= await apicall.post("/rooms",roomDeatils);
     return response.data;
}

export const joinChat=async(roomId:string)=>{
     const response=await apicall.get(`/rooms/${roomId}`)
     return response.data
}

export const getMessages=async(roomId:string)=>{
     const response=await apicall.get(`/rooms/${roomId}/messages`)
     return response.data
}