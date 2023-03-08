import React from 'react'
import {Formik} from "formik"
import { Link } from 'react-router-dom'
import "../../../App.css"
import validation from "./validation"

import {Box, FormControl, FormLabel, Heading,Input,Button} from "@chakra-ui/react"


function SignUp() {
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
         <form onSubmit={handleSubmit}>

       <Heading size={"xl"} textAlign="center">KAYIT OL</Heading>


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



     <FormControl>
      
      <FormLabel>Şifre Onayı:</FormLabel>
       <Input   type="passwordConfirm"
        name="passwordConfirm"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.passwordConfirm}/>
        {errors.passwordConfirm && touched.passwordConfirm && errors.passwordConfirm}
     </FormControl>

     
    <Box>

      <Button colorScheme="purple" mt={5} ml="2">Kayıt Ol</Button>
     <Link to="/signin"><Button colorScheme="purple" mt={5} ml="5">Giriş Yap</Button></Link>
    </Box>
         
         </form>
       )}
     </Formik>




   </Box>


   </Box>

  )
}

export default SignUp