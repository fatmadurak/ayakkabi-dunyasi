import React,{useState} from 'react'
import {  useQuery } from 'react-query'

import { Box,Flex,Grid,Input,Buttton } from '@chakra-ui/react'
import {FetchProductList} from "../../Api"
import  Card  from "../../Components/Card.js"
import "./index.css"
import { Button } from 'antd'

function AllProducts() {

  const [search,SetSearch]=useState("")
  const { isLoading, error, data } = useQuery("products",FetchProductList)
   
  if (isLoading) return 'Loading...'
 
  if (error) return 'An error has occurred: ' + error.message



  
  return (
   <>

    {/* <Box justifyContent="center" alignItems="center" mt={200}>

      <Input color="red" size="l"/>
    </Box> */}


   <Box className='content'>
   
   <Grid templateColumns="repeat(4,1fr)"  gap={20} mt="280" justifyContent="center" alignItems="center" >
   
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