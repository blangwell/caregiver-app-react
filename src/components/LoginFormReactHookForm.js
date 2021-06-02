import { Link as ReactRouterDomLink, useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
	errorMessage: {
		color: 'red'
	},
  form: {
    width: '100%'
  }, 
  submit: {
    margin: theme.spacing(3, "auto")
  }
}));

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginFormReactHookForm = props => {
	const { control, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(loginValidationSchema)
	});
	const classes = useStyles();
  const history = useHistory();

	const onSubmit = async (values) => {
		await props.handleLogin(values);
		history.push('/profile');
	};

	return (
		<Container maxWidth="xs" >
			<div className={classes.root}>
				<Typography variant="h5" component="h1">Login</Typography>
					<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
						<Controller
							name="email"
							control={control}
							defaultValue=""
							render={ ({ field }) => (
								<TextField 
									{ ...field }
									label="Email Address *" 
									variant="outlined"
									margin="normal"
									fullWidth
								/>
							)}
						/>
						{ errors.email && <p className={classes.errorMessage}>{errors.email.message}</p> }

						<Controller
							name="password"
							control={control}
							defaultValue=""
							render={ ({ field }) => (
								<TextField 
									{ ...field }
									type="password"
									label="Password *" 
									variant="outlined"
									margin="normal"
									fullWidth
								/>
							)}
						/>
						{ errors.password && <p className={classes.errorMessage}>{errors.password.message}</p> }

						{/* <FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/> */}
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
	)
}

export default LoginFormReactHookForm;