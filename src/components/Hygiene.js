import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import LabeledCheckbox from './LabeledCheckbox';

const Hygiene = props => {
  return(
    <Container maxWidth="sm">
      <Typography variant="h5"> 
        Hygiene 
      </Typography>
      <LabeledCheckbox name="shower" color="primary" label="Shower" />
      <LabeledCheckbox name="bath" color="primary" label="Bath" />
      <LabeledCheckbox name="bedBath" color="primary" label="Bed Bath" />
      <LabeledCheckbox name="periCare" color="primary" label="Peri Care" />
      <LabeledCheckbox name="oralCare" color="primary" label="Oral Care" />
      <LabeledCheckbox name="shave" color="primary" label="Shave" />
    </Container>
  );
};

export default Hygiene;