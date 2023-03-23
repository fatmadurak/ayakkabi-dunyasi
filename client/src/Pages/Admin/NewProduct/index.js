import React from 'react'
import { Formik ,FieldArray} from 'formik';
import { Flex,Box, FormControl, FormLabel,Input} from '@chakra-ui/react';
import { postProduct } from '../../../Api';
import { useMutation,useQueryClient} from 'react-query';

function NewProduct() {
 
  const queryClient=useQueryClient();
 
  const newProductMutation=useMutation(postProduct,{

    onSuccess:()=>queryClient.invalidateQueries("admin:products")
   
    },)

 const handleSubmit=async({values,bag})=>{




 }
 
 return(
 
 
 <Flex justifyContent="center" alignItems="center" >

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
    <FormLabel>Ürün Tanımı::</FormLabel>
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
    <FormLabel>Ürün Fiyatı::</FormLabel>
    <Input
             type="price"
             name="price"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.price}
           />
           {errors.price && touched.price && errors.price}
  
    </FormControl>

    <FieldArray
     name="images"
     render={arrayHelpers => (
       <div>
         {values.images.map((image, index) => (
           <div key={index}>
             {/** both these conventions do the same */}
             <Input name={`images.${index}`} value={image} onChange={handleChange}
             onBlur={handleBlur} />
           
 
             <button type="button" onClick={() => arrayHelpers.remove(index)}>
              Sil
             </button>
           </div>
         ))}
         <button
           type="button"
           onClick={() => arrayHelpers.push('')}
         >
           Ekle
         </button>
       </div>
     )}
   />


   
    <button type="submit" isLoading={isSubmitting}>Kaydet</button>
    </form>
  )}
</Formik>
  </Flex>
)}

export default NewProduct
