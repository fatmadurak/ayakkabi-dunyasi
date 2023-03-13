import React from 'react'
import { Box,Alert,AlertIcon,AlertDescription, Grid ,Text,Image,Button} from '@chakra-ui/react'
import { UseBasketContext } from '../../context/BasketContext'
import { Link } from 'react-router-dom'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
    
  } from '@chakra-ui/react'
function Basket() {

    const{basket,removeToBasket}=UseBasketContext();
    
    const { isOpen, onOpen, onClose } = useDisclosure()


  console.log(basket)
  return (
    <Box  mt={250}  >
  
   {  
     basket.length > 0 && (

    <>
       <Alert status='success'>
      <AlertIcon />
      Sepetinizde {basket.length} tane ürün bulunmaktadır...
       </Alert>
      
      <Grid  ml={20}>

      {

       basket.map((basketItem)=>
       
   
      
       <Box p="5px" overflow="hidden" borderRadius="xxl" borderWidth="1px" >
   
       <Link to={`products/${basketItem.id}`}><Image  src={basketItem.images[0]} alt='CardImage'  width={350} height={390} border="xl"  mt="5"/></Link>


        <Box>
   
        <Text fontSize='xl'>{basketItem.title}</Text>
   
        </Box>
        <Box>
   
       <Text fontSize='md'>{basketItem.description}</Text>
   
        </Box>
   
        <Box>
   
       <Text fontSize='3xl'>{basketItem.price}TL</Text>
   
       </Box>

       <Button colorScheme="purple" variant='solid' mt={5} onClick={()=>removeToBasket(basketItem)}>
    {
      "Sepetten Çıkar"

    }
    </Button>

       </Box>

       )
        
      }
        
      
      </Grid>
        
      <Button onClick={onOpen} colorScheme="green" ml={20} mt={5}>Sipariş Ver</Button>
    </>

     )

   }
  { basket.length<=0 &&
      (


        <>
        <Alert status='error'>
      <AlertIcon />

      <AlertDescription>Sepetinizde herhangi bir ürün yok...</AlertDescription>
      </Alert>
        
        
        </>
     )


  }


<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
           Siparişi Kaydet
            </Button>
            <Button onClick={onClose}>Siparişi İptal Et</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    
    </Box>
  )
}

export default Basket