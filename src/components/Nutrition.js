import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

const Nutrition = props => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5">
        Nutrition
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
          name="breakfast"
          color="primary"
          />
        }
        label="Breakfast"
      />
      <FormControlLabel
        control={
          <Checkbox
          name="lunch"
          color="primary"
          />
        }
        label="Lunch"
      />
      <FormControlLabel
        control={
          <Checkbox
          name="dinner"
          color="primary"
          />
        }
        label="Dinner"
      />
      <FormControlLabel
        control={
          <Checkbox
          name="snack"
          color="primary"
          />
        }
        label="Snack"
      />
      
    </Container>
  )
}

export default Nutrition;