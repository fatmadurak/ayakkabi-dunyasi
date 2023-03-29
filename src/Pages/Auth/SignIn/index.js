import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import "../../../App.css";
import validation from "./validation";
import { EmailControl, fetchLogin, PasswordControl } from "../../../Api";
import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import { UseAuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { login } = UseAuthContext();
  const navigate = useNavigate();
  return (
    <Box>
      <Box className="container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validation}
          onSubmit={async (values, bag) => {
            const emailControl = await EmailControl(values.email);
            const passwordControl = await PasswordControl(values.password);

            if (emailControl === undefined) {
              return bag.setErrors({ email: "Bu e-mail adresi bulunamadı" });
            } else if (passwordControl === undefined) {
              return bag.setErrors({ email: "email veya şifre yanlış.." });
            } else {
              const loginResponse = await fetchLogin(values.email);
              login(loginResponse);
              navigate("/");
            }
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
                GİRİŞ YAP
              </Heading>

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

              <Box>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  colorScheme="purple"
                  mt={5}
                  ml="2"
                >
                  Giriş Yap
                </Button>
                <Link to="/signup">
                  <Button colorScheme="purple" mt={5} ml="5">
                    Kayıt Ol
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

export default SignIn;
