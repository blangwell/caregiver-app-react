import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LabeledCheckbox from './LabeledCheckbox';

const Mobility = props => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5">
        Mobility
      </Typography>
      <LabeledCheckbox name="transfer" color="primary" label="Transfer unassisted" />
      <LabeledCheckbox name="ambulate" color="primary" label="Ambulate" />
      <LabeledCheckbox name="walker" color="primary" label="Walker" />
      <LabeledCheckbox name="wheelchair" color="primary" label="Wheelchair" />
    </Container>
  );
};

export default Mobility;