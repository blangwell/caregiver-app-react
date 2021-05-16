import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import LabeledCheckbox from './LabeledCheckbox';
import NotesField from './NotesField';

const Toileting = props => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5">
        Toileting
      </Typography>
      <LabeledCheckbox name="incontinent" color="primary" label="Incontinent" />
      <LabeledCheckbox name="bm" color="primary" label="BM" />
      <LabeledCheckbox name="urine" color="primary" label="Urine" />
      <NotesField name="toiletingNotes" />
    </Container>
  );
};

export default Toileting;