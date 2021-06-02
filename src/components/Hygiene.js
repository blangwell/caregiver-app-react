import Typography from '@material-ui/core/Typography';
import LabeledCheckbox from './LabeledCheckbox';
import NotesField from './NotesField';

const Hygiene = props => {
  return(
    <div className={props.classes.chartSection}>
      <Typography variant="h5"> 
        Hygiene 
      </Typography>
      <div className={props.classes.checkboxGroup}>
        <LabeledCheckbox name="shower" color="primary" label="Shower" />
        <LabeledCheckbox name="bath" color="primary" label="Bath" />
        <LabeledCheckbox name="bedBath" color="primary" label="Bed Bath" />
        <LabeledCheckbox name="periCare" color="primary" label="Peri Care" />
        <LabeledCheckbox name="oralCare" color="primary" label="Oral Care" />
        <LabeledCheckbox name="shave" color="primary" label="Shave" />
      </div>
      <NotesField name="hygieneNotes" fullWidth/>
    </div>
  );
};

export default Hygiene;