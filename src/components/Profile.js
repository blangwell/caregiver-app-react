import Typography from '@material-ui/core/Typography';

const Profile = (props) => {
  return (
    <Typography variant="h3" component="h1">
      {props.currentUser.email}
    </Typography>
  )
}

export default Profile;