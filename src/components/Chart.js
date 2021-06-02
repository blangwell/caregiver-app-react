import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
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
import Hygiene from './Hygiene';
import Mobility from './Mobility';
import Toileting from './Toileting';
import LabeledCheckbox from './LabeledCheckbox';

const sleepMarks = [
  { value: 0, label: '0 hrs' },
  { value: 24, label: '24 hrs' }
]

const painMarks = [
  { value: 0, label: '0' },
  { value: 10, label: '10' }
]

const validationSchema = Yup.object({
  sleep: Yup.number('must be a number'),
  fluidIntake: Yup.number('must be a number')
});

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4),  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  chartSection: {
    padding: theme.spacing(2)
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    paddingTop: theme.spacing(4)
  }
}));

const Chart = props => {
  const [pain, setPain] = useState(false);

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
    <Paper>
    <div className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.title}>
        New Chart
      </Typography>
      <form>
        <KeyboardDateTimePicker
          maxDate={now}
          value={formik.values.dateTime}
          className={classes.chartSection}
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
        />
        <LabeledCheckbox 
          name="pain" 
          color="primary" 
          label="In pain?" 
          handleClick={() => setPain(!pain)}
        />
        { pain ? (
          <>
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
          </>
          ) : null }
        <Nutrition formik={formik} classes={classes} />
        <Hygiene formik={formik} classes={classes} />
        <Mobility formik={formik} classes={classes} />
        <Toileting formik={formik} classes={classes} />
        <Button variant="contained" color="primary">
          Save Chart
        </Button>
      </form>
    </div>
    </Paper>
    </Container>
    </MuiPickersUtilsProvider>
  )
};

export default Chart;