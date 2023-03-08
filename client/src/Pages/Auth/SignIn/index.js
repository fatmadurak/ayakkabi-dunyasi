import React from 'react'
import {Formik} from "formik"
import { Link } from 'react-router-dom'
import "../../../App.css"
import validation from './validation'

import {Box, FormControl, FormLabel, Heading,Input,Button} from "@chakra-ui/react"


function SignIn() {
  return (
 <Box>

  
 
   <Box className='container'>

   

     <Formik
       initialValues={{ email: '', password: '', passwordConfirm: '' }}
       validationSchema={validation}
       onSubmit={(values, bag) => {
      
        



       }}
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
         <form onSubmit={handleSubmit}style={{width:"20%"}}>

       <Heading size={"xl"} textAlign="center">GİRİŞ YAP</Heading>


          <FormControl>
      
           <FormLabel>Email:</FormLabel>
            <Input   type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}/>
             {errors.email && touched.email && errors.email}
          </FormControl>

          <FormControl>
      
      <FormLabel>Şifre:</FormLabel>
       <Input   type="password"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}/>
        {errors.password && touched.password && errors.password}
     </FormControl>


    <Box>

      <Button colorScheme="purple" mt={5} ml="2">Giriş Yap</Button>
     <Link to="/signin"><Button colorScheme="purple" mt={5} ml="5">Kayıt Ol</Button></Link>
    </Box>
         
         </form>
       )}
     </Formik>




   </Box>


   </Box>

  )
}

export default SignIn