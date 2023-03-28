import React, { useEffect, useState } from 'react'
import {ClassicAyakkabi} from "../../Api"
import {Grid,Box} from '@chakra-ui/react';
import Card from "../../Components/Card.js"
function KlasikAyakkabi() {
  
 const [klasik,setKlasik]=useState([]);

  useEffect(()=>{

     (async()=>{

      const data=await ClassicAyakkabi();
      return setKlasik(data)



       })()


   


  },[])


  return (
   <>
   <Box className='content'>

     {  klasik && (

     <Grid templateColumns="repeat(3,1fr)"  gap={20} mt="280" justifyContent="center" alignItems="center" >
   
   {
      klasik.map((item,key) =>(<Card item={item} key={item.id}/>)
     )

   }

   </Grid>





     )





     }




</Box>
   </>
  )
}

export default KlasikAyakkabi
