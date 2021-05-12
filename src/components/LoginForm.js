import axios from 'axios';
import { useFormik } from 'formik';
import { Link as ReactRouterDomLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = () => {
  const classes = useStyles();
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
      <Container maxWidth="xs" >
        <div className={classes.root}>
          <Typography variant="h5" component="h1">Login</Typography>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
              <TextField 
                id="email"
                name="email"
                type="email"
                label="Email Address *" 
                variant="outlined"
                margin="normal"
                fullWidth
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
                label="Password *"
                variant="outlined" 
                margin="normal"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button 
                color="primary" 
                type="submit"
                variant="contained"
                fullWidth
                className={classes.submit}
              >
                Login
              </Button>
            </form>
            <Link 
              component={ReactRouterDomLink}
              to="/signup"
            >
              Don't have an account? Sign Up
            </Link>
        </div>
      </Container>
  );
};

export default LoginForm;