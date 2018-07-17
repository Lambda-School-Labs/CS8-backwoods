import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

// CssBaseline is the Material UI built in CSS reset
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn(e) {
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <CssBaseline>
            <h1>Back Woods App</h1>
            {/* DEBUG */}
            <h3> Logged In: {this.state.isLoggedIn.toString()}</h3>
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </CssBaseline>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
