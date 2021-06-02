import Typography from '@material-ui/core/Typography';
import LabeledCheckbox from './LabeledCheckbox';
import NotesField from './NotesField';

const Nutrition = props => {
  return (
    <div className={props.classes.chartSection}>
      <Typography variant="h5">
        Nutrition
      </Typography>
      <div className={props.classes.checkboxGroup}>
        <LabeledCheckbox name="breakfast" color="primary" label="Breakfast" />
        <LabeledCheckbox name="lunch" color="primary" label="Lunch" />
        <LabeledCheckbox name="dinner" color="primary" label="Dinner" />
        <LabeledCheckbox name="snack" color="primary" label="Snack" />
        <LabeledCheckbox name="fluids" color="primary" label="Fluids" />
      </div>
      <NotesField name="nutritionNotes" />
    </div>
  )
}

export default Nutrition;