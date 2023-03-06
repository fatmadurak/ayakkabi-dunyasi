import React from 'react'
import {  useQuery } from 'react-query'
import { FetchProductList } from '../../../Api'
import { Box,Grid } from '@chakra-ui/react'
import Card from "../../../Components/Card.js"
function AllProducts() {
  const { isLoading, error, data } = useQuery("products",FetchProductList)
  
  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message

  console.log(data)
  return (
   <>
   <Box>
   
   <Grid templateColumns="repeat(4,1fr)"  gap={10} mt="250" >
   
   {
         data.map((item,key) =>(<Card item={item} key={item.id}/>)
        )

   }

</Grid>
  

   </Box>
   
   
   
   </>
  )
}

export default AllProducts