import Typography from '@material-ui/core/Typography';
import LabeledCheckbox from './LabeledCheckbox';
import NotesField from './NotesField';

const Mobility = props => {
  return (
    <div className={props.classes.chartSection}>
      <Typography variant="h5">
        Mobility
      </Typography>
      <LabeledCheckbox name="transfer" color="primary" label="Transfer unassisted" />
      <LabeledCheckbox name="ambulate" color="primary" label="Ambulate" />
      <LabeledCheckbox name="walker" color="primary" label="Walker" />
      <LabeledCheckbox name="wheelchair" color="primary" label="Wheelchair" />
      <NotesField name="mobilityNotes" />
    </div>
  );
};

export default Mobility;