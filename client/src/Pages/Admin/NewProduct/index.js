import React from 'react'
import { Formik ,FieldArray,Field} from 'formik';
import { Flex,Box, FormControl, FormLabel,Input, Button} from '@chakra-ui/react';
import { postProduct } from '../../../Api';
import { useMutation,useQueryClient} from 'react-query';
import { message } from 'antd';
function NewProduct() {
 
  const queryClient=useQueryClient();
 
  const newProductMutation=useMutation(postProduct,{

    onSuccess:()=>queryClient.invalidateQueries("admin:products")
   
    },)

 const handleSubmit=async({values,bag})=>{

  message.loading({content:"Loading...",key:"product_add"})


  const newValues={

    ...values,
    images:JSON.stringify(values.images)


}
newProductMutation.mutate(newValues, {
  onSuccess: () => {
    console.log("success");
  },
})


 }
 
 return(
 
 
 <Box justifyContent="center" alignItems="center"  m={20}>

    <Formik
  initialValues={{ title: '', description: '',price:'',images:[]}}
 
 
  onSubmit={handleSubmit}
>
  {({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
  }) => (
    <form onSubmit={handleSubmit}>
    
    <FormControl>
    <FormLabel>Ürün Başlığı:</FormLabel>
    <Input
             type="title"
             name="title"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.title}
           />
           {errors.title && touched.title && errors.title}
  
    </FormControl>

    <FormControl>
    <FormLabel>Ürün Tanımı:</FormLabel>
    <Input
             type="description"
             name="description"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.description}
           />
           {errors.description && touched.description && errors.description}
  
    </FormControl>



    <FormControl>
    <FormLabel>Ürün Fiyatı:</FormLabel>
    <Input
             type="price"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
  
    </FormControl>

    <FormControl mt={4}>

      <FormLabel>Ürün Görüntüleri: </FormLabel>
      <FieldArray
      
      name="images"
      render={(arrayHelpers)=>
    
         <div>
            {

                values.images && values.images.map((image,index)=>
                
                 <div key={index}>
                    <Input  name={`images.${index}`}
                     value={image}
                     disabled={isSubmitting}
                     onChange={handleChange}
                     width="3xl"
                    
                    
                    />

                    <Button ml="4" type='button' colorScheme="red" onClick={()=>arrayHelpers.remove(index)}>Sil</Button>
                 </div>
                
                )
            }



   
        <Button mt={5} onClick={()=>arrayHelpers.push("")} colorScheme="purple"> Görüntü ekle</Button>



         </div>
    
    
    }
      
      />

      </FormControl>


   
    <Button type="submit" mt={5} colorScheme="green">Kaydet</Button>
    </form>
  )}
</Formik>
  </Box>
)}

export default NewProduct
