import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { fetchProduct,updateProduct } from '../../../Api';
import {Formik,FieldArray} from "formik"
import { Text,Box, FormControl,FormLabel,Input,Textarea,Button} from '@chakra-ui/react';
import validationSchema from './validations';
import { message } from 'antd';

function AdminProductDetail() {

    const {product_id}=useParams();
    
    const{isLoading,isError,data,error}=useQuery(["admin:product",product_id],()=>fetchProduct(product_id))
  
    console.log(data)
    
    if (isLoading) {
        return <div>
            Loading...
        </div>
    }

    if (isError) {
        
        return <div>
            {error.message}
        </div>
    }

const handleSubmit=async(values,bag)=>{

try {
    
    await updateProduct(values,product_id)
} catch (e) {
    
    message.error("the product does  not update")

}

  


}

  return (
    <Box  justifyContent={"center"} alignItems={"center"}m={10}>
 
  <Text fontSize="2xl">Edit</Text>

  <Formik
  initialValues={{

    title:data.title,
    description:data.description,
    price:data.price,
    images:data.images,
  }}

  validationSchema={validationSchema}

  onSubmit={handleSubmit}

  
  >


{

  ({handleSubmit,errors,touched,handleChange,handleBlur,values,isSubmitting})=>
  <>
  
  <Box>

    <Box my={5} textAlign="left">

     <form onSubmit={handleSubmit}>
 
  
      <FormControl>

        <FormLabel>Title </FormLabel>
        <Input name="title" onChange={handleChange} onBlur={handleBlur} value={values.title} disabled={isSubmitting} isInvalid={touched.title && errors.title}/>
      </FormControl>
    

    
      <FormControl mt={4}>

        <FormLabel>Description </FormLabel>
        <Textarea name="description" onChange={handleChange} onBlur={handleBlur} value={values.description} disabled={isSubmitting} isInvalid={touched.description && errors.description}/>
      </FormControl>
      


      <FormControl mt={4}>

        <FormLabel>Price </FormLabel>
        <Input name="price" onChange={handleChange} onBlur={handleBlur} value={values.price} disabled={isSubmitting} isInvalid={touched.price && errors.price}/>
      </FormControl>


      <FormControl mt={4}>

      <FormLabel>images </FormLabel>
      <FieldArray
      
      name="images"
      render={(arrayHelpers)=>
    
         <Box >
            {

                values.images && values.images.map((image,index)=>
                
                 <Box key={index} mt={2}>
                    <Input  name={`images.${index}`}
                     value={image}
                     disabled={isSubmitting}
                     onChange={handleChange}
                     width="3xl"
                    
                    
                    />

                    <Button ml="4" type='button' colorScheme="yellow" onClick={()=>arrayHelpers.remove(index)}>Remove</Button>
                 </Box>
                
                )
            }



   
        <Button mt={5} onClick={()=>arrayHelpers.push("")}  colorScheme="purple" > Add a image</Button>



         </Box>
    
    
    }
      
      />

      </FormControl>


     <Button mt={4} width="full" type='submit' isLoading={isSubmitting} colorScheme="green" > Update</Button>

     </form>



    </Box>




  </Box>

  
  
  
  
  </>


}





  </Formik>


    </Box>
  )
}

export default AdminProductDetail