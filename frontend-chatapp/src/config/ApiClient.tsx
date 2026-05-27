import axios from "axios";

const apicall=axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1`,
    headers:{
       "Content-Type": "application/json"
    },
    timeout:10000
})

export default apicall;