import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import LabeledCheckbox from './LabeledCheckbox';
import NotesField from './NotesField';

const Nutrition = props => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5">
        Nutrition
      </Typography>
      <LabeledCheckbox name="breakfast" color="primary" label="Breakfast" />
      <LabeledCheckbox name="lunch" color="primary" label="Lunch" />
      <LabeledCheckbox name="dinner" color="primary" label="Dinner" />
      <LabeledCheckbox name="snack" color="primary" label="Snack" />
      <LabeledCheckbox name="fluids" color="primary" label="Fluids" />
      <NotesField name="nutritionNotes" />
    </Container>
  )
}

export default Nutrition;