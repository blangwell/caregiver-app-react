import axios from 'axios';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%'
  }, 
  submit: {
    margin: theme.spacing(3, "auto")
  }
}));

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
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
});

const SignupForm = () => {
  const classes = useStyles();
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
    <Container maxWidth="xs">
      <div className={classes.root}>
        <Typography variant="h5" component="h1">Sign up</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField 
            fullWidth
            id="email"
            label="Email Address *" 
            margin="normal"
            name="email"
            type="email"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField 
            fullWidth
            id="password"
            label="Password *" 
            margin="normal"
            name="password"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField 
            id="confirmPassword"
            label="Confirm password *" 
            name="confirmPassword"
            type="password"
            margin="normal"
            variant="outlined"
            fullWidth
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          <Button 
            color="primary" 
            type="submit"
            variant="contained"
            fullWidth
            className={classes.submit}
          >
            Sign up
          </Button>
        </form>
          <Link 
            component={ReactRouterDomLink}
            to="/login"
          >
            Already have an account? Login
          </Link>
      </div>
    </Container>
  );
};

export default SignupForm;