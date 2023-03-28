import React from 'react'

import {Box,Grid,Image} from "@chakra-ui/react"

import { Text} from '@chakra-ui/react'
import "./index.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
function Home() {


  return (
  <>
  
  <Box className='content'>

  <Box>
   <Grid templateColumns="repeat(6,1fr)"   mt="250" justifyContent="center" alignItems="center" > 
  
    <Box className='box'>
   
    <Text fontSize="xl" pl={4}>Erkek</Text>
     
     <Image 
     borderRadius='full'
     boxSize='100px'
     src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0146473_provoq-siyah-deri-kadin-asker-botu-4262mrz855900.jpeg'
     alt='Dan Abramov'
/>

    </Box>
    <Box className='box'>
   
    <Text fontSize="xl" pl={4}>Kadın</Text>
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0150016_provoq-mavi-kadin-terlik-4141k30050100.jpeg'
    alt='Dan Abramov'
/>

   </Box>

   <Box className='box'>
   
   <Text fontSize="xl" pl={4}>Çocuk</Text>
    <Image 
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0115821_provoq-siyah-kadin-bot-4498221770100.jpeg'
    alt='Dan Abramov'
/>

   </Box>

   <Box className='box'>
   
   <Text fontSize="xl" pl={4} >Markalar</Text>
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0137891_provoq-vizon-deri-kadin-bot-4498221380210.jpeg'
    alt='Dan Abramov'
/>

   </Box>
   <Box className='box'>
   
   <Text fontSize="xl" pl={2} >Aksesuarlar</Text>
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0141442_provoq-kahve-deri-kadin-bot-4498a2213200.jpeg'
    alt='Dan Abramov'
/>

   </Box>
   <Box className='box'>
   
   <Text fontSize="xl" pl={2}>Yıldızlı Ürünler</Text>
    <Image
    borderRadius='full'
    boxSize='100px'
    src='https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0139920_adidas-racer-lego-beyaz-unisex-spor-ayakkabi-gx2240-2008gx2240.jpeg'
    alt='Dan Abramov'
/>

   </Box>

   </Grid>
   
  <Box className='carousalBox'>


  <Carousel
          autoPlay="true"
          emulateTouch="true"
          infiniteLoop="true"
          showArrows="true"
          className='carousal'
         
        >
          <div>
            <img 
              src="https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0150627.jpeg"
              alt="carouselImage"
            />
          </div>

          <div>
            <img 
              src="https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0152121.jpeg"
              alt="carouselImage"
            />
          </div>

          
          <div>
            <img 
              src="https://img-ayakkabidunyasi.mncdn.com/Content/Images/Thumbs/0151768.jpeg"
              alt="carouselImage"
            />
          </div>
      
        </Carousel>


  </Box>




   </Box>
  
  
 


  
   </Box>

  
  
  </>
  )
}

export default Home