import * as Yup from 'yup';

const loginSchema = Object({
  email: Yup.string().email().required("please fill the value"),
  password: Yup.number().positive().integer().required("please fill the value"),
});


export default loginSchema;