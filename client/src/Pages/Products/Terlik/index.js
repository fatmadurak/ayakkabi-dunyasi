import React,{useEffect, useState}from 'react'
import { CategoryTerlik } from '../../../Api.js';
import Card from '../../../Components/Card.js';

import {Box, Grid} from "@chakra-ui/react"
function Terlik() {

  const [terlikData,setTerlikData]=useState([]);

  useEffect(()=>{

 (async()=>{

  const data=await CategoryTerlik()

  setTerlikData(data)



 })()


  },[])

  if (terlikData.length < 1) return "Loading...";

  console.log(terlikData)

  return (
    <>
 <Grid templateColumns="repeat(4,1fr)">
 

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