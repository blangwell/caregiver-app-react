import TextField from '@material-ui/core/TextField';

const NotesField = props => {
  return (
    <>
      <TextField 
        multiline
        name={props.name}
        id={props.name}
        label="Notes"
        rows={4}
        fullWidth
        variant="outlined"
      />
    </>
  );
};

export default NotesField;