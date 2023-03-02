import axios from "axios"


export  const fetchProduct=async()=>{

const {data}= axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products`)

return data;

}