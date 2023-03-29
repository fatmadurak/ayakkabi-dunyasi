import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import "../../../App.css";

import validation from "./validation";
import { useNavigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import { EmailControl, fetchRegister } from "../../../Api";
import { UseAuthContext } from "../../../context/AuthContext";

function SignUp() {
  const navigate = useNavigate();

  const { login } = UseAuthContext();
  return (
    <Box>
      <Box className="container">
        <Formik
          initialValues={{
            email: "",
            password: "",
            passwordConfirm: "",
            userName: "",
          }}
          validationSchema={validation}
          onSubmit={(values, bag) => {
            try {
              (async () => {
                const emailControl = await EmailControl(values.email);
                if (emailControl === undefined) {
                  const registerResponse = await fetchRegister({
                    role: "user",
                    email: values.email,
                    password: values.password,
                    userName: values.userName,
                  });
                  login(registerResponse);
                  navigate("/profile");
                } else {
                  return bag.setErrors({
                    email: "Bu e-mail adresi ile kayıt olunmuştur.",
                  });
                }
              })();
            } catch (error) {}
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
            <form onSubmit={handleSubmit} style={{ width: "20%" }}>
              <Heading size={"xl"} textAlign="center">
                KAYIT OL
              </Heading>

              <FormControl>
                <FormLabel>Kullanıcı Adı:</FormLabel>
                <Input
                  type="userName"
                  name="userName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.userName}
                />
                {errors.userName && touched.userName && errors.userName}
              </FormControl>

              <FormControl>
                <FormLabel>Email:</FormLabel>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </FormControl>

              <FormControl>
                <FormLabel>Şifre:</FormLabel>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </FormControl>

              <FormControl>
                <FormLabel>Şifre Onayı:</FormLabel>
                <Input
                  type="passwordConfirm"
                  name="passwordConfirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                />
                {errors.passwordConfirm &&
                  touched.passwordConfirm &&
                  errors.passwordConfirm}
              </FormControl>

              <Box>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  colorScheme="purple"
                  mt={5}
                  ml="2"
                >
                  Kayıt Ol
                </Button>
                <Link to="/signin">
                  <Button colorScheme="purple" mt={5} ml="5">
                    Giriş Yap
                  </Button>
                </Link>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default SignUp;
