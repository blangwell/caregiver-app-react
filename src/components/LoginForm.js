import { Formik, Form } from 'formik';
import TextInput from './TextInput';
import * as Yup from 'yup';

const LoginForm = () => {
  return (
    <Formik 
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email().required('Email required'),
        password: Yup.string().required('Please enter a password'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form noValidate>
        <TextInput 
          label="Email Address"
          name="email"
          type="email"
          placeholder="joeschmoe@aol.com"
        />
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