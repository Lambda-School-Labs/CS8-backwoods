import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

function NavBar(props) {
  return (
    <Paper className="navBar">
      <List component="nav">
        <Link to="/trips/">
          <ListItem button>
            <ListItemText primary="Trips" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/trips/billing/">
          <ListItem button>
            <ListItemText primary="Billing" />
          </ListItem>
        </Link>
      </List>
      <List component="nav">
        <Link to="/trips/settings">
          <ListItem button>
            <ListItemText primary="Account" />
          </ListItem>
        </Link>
      </List>
    </Paper>
  );
}

export default withStyles(styles)(NavBar);
