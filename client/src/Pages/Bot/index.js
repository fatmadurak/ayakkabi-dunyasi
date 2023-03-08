import React, { useEffect, useState } from 'react'
import {CategoryBot} from "../../Api"
import {Grid,Box} from '@chakra-ui/react';
import Card from "../../Components/Card.js"
function Bot() {
  
 const [bot,setBot]=useState([]);

  useEffect(()=>{

     (async()=>{

      const data=await CategoryBot();
      return setBot(data)



       })()


   


  },[])


  return (
   <>
     <Box className="content">

     {  bot && (

     <Grid templateColumns="repeat(3,1fr)"  gap={20} mt="280" justifyContent="center" alignItems="center" >
   
   {
      bot.map((item,key) =>(<Card item={item} key={item.id}/>)
     )

   }

   </Grid>





     )





     }



</Box>
   
   </>
  )
}

export default Bot
