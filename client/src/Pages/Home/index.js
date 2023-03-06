import React from 'react'

import {Box,Grid,Image} from "@chakra-ui/react"

import { Link } from '@chakra-ui/react'
import "./index.css"

function Home() {
  return (
  <>
  
   <Grid templateColumns="repeat(6,1fr)"> 
  
    <Box className='box'>
   
    <Link to={"/products"}>   
     <Image 
     borderRadius='full'
     boxSize='100px'
     src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0146473_provoq-siyah-deri-kadin-asker-botu-4262mrz855900.jpeg'
     alt='Dan Abramov'
/>
</Link>
    </Box>
    <Box className='box'>
   
   <Link>   
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0150016_provoq-mavi-kadin-terlik-4141k30050100.jpeg'
    alt='Dan Abramov'
/>
</Link>
   </Box>

   <Box className='box'>
   
   <Link>   
    <Image 
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0115821_provoq-siyah-kadin-bot-4498221770100.jpeg'
    alt='Dan Abramov'
/>
</Link>
   </Box>

   <Box className='box'>
   
   <Link>   
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0137891_provoq-vizon-deri-kadin-bot-4498221380210.jpeg'
    alt='Dan Abramov'
/>
</Link>
   </Box>
   <Box className='box'>
   
   <Link>   
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0141442_provoq-kahve-deri-kadin-bot-4498a2213200.jpeg'
    alt='Dan Abramov'
/>
</Link>
   </Box>
   <Box className='box'>
   
   <Link>   
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0139920_adidas-racer-lego-beyaz-unisex-spor-ayakkabi-gx2240-2008gx2240.jpeg'
    alt='Dan Abramov'
/>
</Link>
   </Box>

   </Grid>
   
  
  
  
  
  
  
  
  
  </>
  )
}

export default Home