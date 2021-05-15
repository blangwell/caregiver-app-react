import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));

const validationSchema = Yup.object({
  sleep: Yup.number('must be a number'),
  fluidIntake: Yup.number('must be a number')
})

const Chart = props => {
  const now = new Date();
  const classes = useStyles();
  
  const makeDateTimeString = () => {
    const checkLength = chunk => chunk.length === 1 ? '0' + chunk : chunk;
    const month = checkLength(now.getMonth().toString());
    const day = checkLength(now.getDay().toString());
    const hours = checkLength(now.getHours().toString());
    const mins = checkLength(now.getMinutes().toString());

    return `${now.getFullYear()}-${month}-${day}T${hours}:${mins}`;
  };
  const dateTimeString = makeDateTimeString();

  const formik = useFormik({
    initialValues: {
      dateTime: dateTimeString,
      sleep: 0,
      fluidIntake: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async values => {
      console.log('submitted')
    }
  });

  return (
    <Container maxWidth="md" className={classes.root}>
      <div>
        <Typography variant="h4" component="h1">
          New Chart
        </Typography>
        <TextField 
          id="datetime"
          type="datetime-local"
          value={ formik.values.dateTime }
        />
      </div>
    </Container>
  )
}

export default Chart;