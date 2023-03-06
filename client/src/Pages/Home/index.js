import React from 'react'

import {Box,Grid,Image} from "@chakra-ui/react"

import { Link } from '@chakra-ui/react'
import "./index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
function Home() {


  return (
  <>
  <Box>
   <Grid templateColumns="repeat(6,1fr)"  gap={20} mt="280" justifyContent="center" alignItems="center" > 
  
    <Box className='box'>
   
     
     <Image 
     borderRadius='full'
     boxSize='100px'
     src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0146473_provoq-siyah-deri-kadin-asker-botu-4262mrz855900.jpeg'
     alt='Dan Abramov'
/>

    </Box>
    <Box className='box'>
   

    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0150016_provoq-mavi-kadin-terlik-4141k30050100.jpeg'
    alt='Dan Abramov'
/>

   </Box>

   <Box className='box'>
   
 
    <Image 
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0115821_provoq-siyah-kadin-bot-4498221770100.jpeg'
    alt='Dan Abramov'
/>

   </Box>

   <Box className='box'>
   
 
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0137891_provoq-vizon-deri-kadin-bot-4498221380210.jpeg'
    alt='Dan Abramov'
/>

   </Box>
   <Box className='box'>
   
 
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0141442_provoq-kahve-deri-kadin-bot-4498a2213200.jpeg'
    alt='Dan Abramov'
/>

   </Box>
   <Box className='box'>
   
  
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0139920_adidas-racer-lego-beyaz-unisex-spor-ayakkabi-gx2240-2008gx2240.jpeg'
    alt='Dan Abramov'
/>

   </Box>

   </Grid>
   
  <Box>



  {/* <Carousel>
                <div>
                    <img src="https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0150016_provoq-mavi-kadin-terlik-4141k30050100.jpeg" />
                  
                </div>
                <div>
                    <img src="https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0131803_buckhead-turkuaz-kadin-terlik-4686415410100.jpeg" />
                   
                </div>
                <div>
                    <img src="https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0150498_provoq-vizon-kadin-terlik-40291260101110.jpeg" />
                   
                </div>
            </Carousel> */}




 





  </Box>







   </Box>
  
  
  
  

  
  
  </>
  )
}

export default Home