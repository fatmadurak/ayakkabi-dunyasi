import React from 'react'
import {Box,Container,Text} from"@chakra-ui/react";
import { AspectRatio } from '@chakra-ui/react'
import "../../App.css"

function Connection() {
  return (
  <>
  
  <Box className={Container} style={{marginTop:"15%",marginLeft:"27%"}} maxWidth="900">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96320.74916655212!2d28.649985440984736!3d41.02474374700395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa727fbb7a5af%3A0x36e1fd9eda6fa4da!2zQXZjxLFsYXIvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1660121056193!5m2!1str!2str" 
          width="100%"
          height="400"
          title="İstanbul"
          loading="lazy"
          borderRadius="8px"
        ></iframe>
        </Box>
  
  
  </>
  )
}

export default Connection