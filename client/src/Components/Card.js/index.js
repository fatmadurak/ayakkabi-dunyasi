import React from 'react'
import { Box,Text,Image,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Card(item) {
  return (
    <>
    
    <Box>
    
    <Link to={`/products/${item.id}`}> 
    <Image src={item.image} alt='CardImage' />
    </Link>
   
    <Box>

     <Box>

     <Text fontSize='xl'>{item.title}</Text>

     </Box>
     <Box>

    <Text fontSize='xl'>{item.description}</Text>

     </Box>

     <Box>

    <Text fontSize='xl'>{item.price}TL</Text>

    </Box>
    </Box>

     
    <Button colorScheme='purple' variant='solid' >
       Sepete Ekle
    </Button>
 

    </Box>
    
    
    
    </>
  )
}

export default Card