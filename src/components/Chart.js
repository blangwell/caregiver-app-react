import Container from '@material-ui/core/Container';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDateTimePicker } from '@material-ui/pickers';
import * as Yup from 'yup';

import Nutrition from './Nutrition';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  thumb: {
    "& span[class*='PrivateValueLabel-circle']": {
      width: 50,
      height: 50,
      position: 'relative',
      left: -9,
      top: -17,
    },
  }
}));

const sleepMarks = [
  {
    value: 0,
    label: '0 hrs'
  },
  {
    value: 24,
    label: '24 hrs'
  }
]

const painMarks = [
  {
    value: 0,
    label: '0'
  },
  {
    value: 10,
    label: '10'
  }
]

const validationSchema = Yup.object({
  sleep: Yup.number('must be a number'),
  fluidIntake: Yup.number('must be a number')
})

const Chart = props => {
  const now = new Date();
  const dateTimeString = new Date().toString();

  const classes = useStyles();

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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Container maxWidth="sm">
      <div className={classes.root}>
      <Typography variant="h4" component="h1">
        New Chart
      </Typography>
        <KeyboardDateTimePicker
          maxDate={now}
          value={formik.values.dateTime}
        />
        <Typography variant="h5">
          Sleep
        </Typography>
        <Slider 
          defaultValue={0}
          min={0}
          max={24}
          step={.5}
          valueLabelDisplay="auto"
          marks={sleepMarks}
          color="secondary"
          // valueLabelFormat={value => <div>{`${value} hrs`}</div>}
          // className={classes.thumb}
        />
        <Typography variant="h5">
          Pain Level
        </Typography>
        <Slider 
          defaultValue={0}
          min={0}
          max={10}
          marks={painMarks}
          color="secondary"
          valueLabelDisplay="auto"
        />

        <Nutrition />
      </div>
    </Container>
    </MuiPickersUtilsProvider>
  )
};

export default Chart;