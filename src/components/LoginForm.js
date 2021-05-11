import axios from 'axios';
import { Formik, Form, useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';

const postLogin = async (values) => {
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
  };
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postLogin(values);
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField 
          id="email"
          name="email"
          type="email"
          label="Email" 
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField 
          label="Password" 
          id="password"
          name="password"
          type="password"
          label="Password" 
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        /><br/>
        <Button 
          variant="outlined" 
          color="primary" 
          size="small"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;