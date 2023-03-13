import React, { useState } from 'react'
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
    useDisclosure,
    Input,
    FormControl,
    FormLabel,
    useToast

    
  } from '@chakra-ui/react'
import { fetchOrder } from '../../Api'
function Basket() {

  const toast = useToast();
    const[address,setAddress]=useState("");
    const{basket,removeToBasket,emptyBasket}=UseBasketContext();
    
    const handleClick=async()=>{
  
    await fetchOrder({address:address})

    emptyBasket();
    
    onClose(
      toast({
        title: `Siparişiniz Alındı!`,
        description: "En kısa sürede kargoya verilecektir.",
        status: "success",
        duration: 6000,
        isClosable: true,
        position: "top",
      })
    );

    }

    const total = basket.reduce((acc, obj) => {
      if (typeof obj.price === "number") {
        return acc + obj.price;
      } else if (typeof obj.price === "string") {
        return acc + Number(obj.price);
      } else {
        return acc;
      }
    }, 0);

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
      <Box  ml={20} mt={5}>
        
        <Text fontSize={22}> Total:{total}</Text>
 
       </Box>
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


<Modal
       
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sipariş Oluştur</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input type="address" name="address" value={address}  onChange={(e)=>{setAddress(e.target.value)}}  placeholder='Address :' />
            </FormControl>
          
        
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleClick}>
              Kaydet
            </Button>
            <Button onClick={onClose}>İptal Et</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    
    </Box>
  )
}

export default Basket