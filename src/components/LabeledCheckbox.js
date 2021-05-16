import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const LabeledCheckbox = props => {
  return(
    <>
      <FormControlLabel
        control={
          <Checkbox 
            id={props.name}
            name={props.name}
            color={props.color}
            onClick={props.handleClick ?? ""}
          />
        }
        label={props.label}
      />
    </>
  );
};

export default LabeledCheckbox;