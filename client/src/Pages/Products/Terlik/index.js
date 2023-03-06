import React,{useState,useEffect}from 'react'
import CategoryTerlik from "../../../Api"
import Card from "../../../Components/Card.js"

import {Box, Grid} from "@chakra-ui/react"


function Terlik() {

 const[terlikData,setTerlikData]=useState([])

 useEffect(()=>{

 (async()=>{

  const data=await CategoryTerlik()

  setTerlikData(data)


 })()
 



 },[])


  return (
    <>
 <Grid templateColumns="repeat(4,1fr)" mt={20}>
 

 {  terlikData && terlikData.map((item)=>{

<Box key={item.id}>

<Card item={item} />
 


</Box>


    })


 }



 </Grid>
    

    
    </>
  )
}

export default Terlik