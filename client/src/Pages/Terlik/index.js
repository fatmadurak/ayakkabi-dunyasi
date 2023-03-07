import React, { useEffect, useState } from 'react'
import {CategoryTerlik} from "../../Api"
import {Grid} from '@chakra-ui/react';
import Card from "../../Components/Card.js"
function Terlik() {
  
 const [terlikData,setTerlikData]=useState([]);

  useEffect(()=>{

     (async()=>{

      const data=await CategoryTerlik();
      return setTerlikData(data)



       })()


   


  },[])


  return (
   <>
   

     {  terlikData && (

     <Grid templateColumns="repeat(3,1fr)"  gap={20} mt="280" justifyContent="center" alignItems="center" >
   
   {
      terlikData.map((item,key) =>(<Card item={item} key={item.id}/>)
     )

   }

   </Grid>





     )





     }




   
   </>
  )
}

export default Terlik