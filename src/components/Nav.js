import { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  drawerList: {
    width: 250
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  }
}));

export default function Nav(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <div
      className={classes.drawerList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'Profile'].map((text, idx) => (
            <ListItem 
              button 
              key={text} 
              component={ Link } to={text === 'Home' ? '/' : '/' + text.toLowerCase()}
            >
              <ListItemText primary={text} />
            </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Login', 'Signup'].map((text, idx) => (
            <ListItem button key={text} component={ Link } to={'/' + text.toLowerCase()}>
              <ListItemText primary={text} />
            </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
          <Drawer open={drawerOpen} >
            {drawerList()}
          </Drawer>
        <Typography variant="h6" className={classes.title}>
          Caregiver Charting
        </Typography>
        <Button 
          color="inherit"
          component={ Link }
          to="/login"
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
    </div>
  )
};