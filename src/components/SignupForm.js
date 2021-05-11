import axios from 'axios';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';

const postSignup = async (values) => {
  try {
    const response = await axios.post('http://localhost:8000/signup', {
      email: values.email,
      password: values.password,
      confirmPassword: values.password
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  };
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      postSignup(values);
    }
  });
  return (
    <div>
      <Typography variant="h2" component="h1">Sign up</Typography>
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
          id="password"
          name="password"
          type="password"
          label="Password" 
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField 
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm password" 
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <Button 
          variant="outlined" 
          color="primary" 
          size="small"
          type="submit"
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;