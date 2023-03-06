import React from 'react'
import { Box,Text,Image,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import "../../../src/App.css"

function Card({item}) {



 

  return (
    <>
    
    <Box p="5px" overflow="hidden" borderRadius="3xl" borderWidth="1px" >
    
    <Link to={`/products/${item.id}`}> 
    <Image className='imageCard' src={item.images[0]} alt='CardImage'  width={300} height={370} />
    </Link>
   
    <Box>

     <Box>

     <Text fontSize='xl'>{item.title}</Text>

     </Box>
     <Box>

    <Text fontSize='md'>{item.description}</Text>

     </Box>

     <Box>

    <Text fontSize='3xl'>{item.price}TL</Text>

    </Box>
    </Box>

     
    <Button colorScheme='purple' variant='solid' mt={5} >
       Sepete Ekle
    </Button>
 

    </Box>
    
    
    
    </>
  )
}

export default Card