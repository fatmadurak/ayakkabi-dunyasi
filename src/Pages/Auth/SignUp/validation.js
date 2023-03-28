import * as Yup from 'yup';


const validation = Yup.object({
    userName:Yup.string().required(),
    email:Yup.string().required(), 
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string()
       .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


export default validation
