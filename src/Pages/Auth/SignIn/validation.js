import * as Yup from "yup";

const validation = Yup.object({
  email: Yup.string().required(),
  password: Yup.string().required("Password is required"),
});

export default validation;
