import React from 'react'
import {UseAuthContext} from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children}) {

    const[loggedIn,setUser]=UseAuthContext()
    const navigate=useNavigate()
    
  return (
    <>
  
    if (loggedIn!==true) {
        
       navigate("/")

    }
    
    
    
    </>
  )
}

export default ProtectedRoute