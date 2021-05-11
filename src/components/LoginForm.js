import { Formik, Form } from 'formik';
import axios from 'axios';
import TextInput from './TextInput';
import * as Yup from 'yup';

const handleSubmit = async (values) => {
  console.log(values);
  try {
    const response = await axios.post('http://localhost:8000/login', {
      email: values.email,
      password: values.password,
      withCredentials: true
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

const LoginForm = () => {
  return (
    <Formik 
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        handleSubmit(values);
      }}
    >
      <Form noValidate>
        <TextInput 
          label="Email Address"
          name="email"
          type="email"
          placeholder="joeschmoe@aol.com"
        /><br/>
        <TextInput 
          label="Password"
          name="password"
          type="password"
        />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  )
};

export default LoginForm;