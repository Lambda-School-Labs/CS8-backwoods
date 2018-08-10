import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import WayPoint from './Waypoint';
import Divider from '@material-ui/core/Divider';
import WaypointCreateCard from './WaypointCreateCard'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const addTheme = createMuiTheme({
  palette: {
    primary: blue
  }
});
const removeTheme = createMuiTheme({
  palette: {
    primary: red
  }
});
class WaypointList extends React.Component {
  state = { ckecked: false }
    getchecked = () => {
      this.setState({ checked: !this.state.checked });
    }
  render() {
  return (
    <Paper className="WaypointListWrapper" elevation={1}>
      <Typography
        variant="display1"
        component="h3"
        className="waypointStartEnd"
      >Start
      </Typography>
      <Divider />
      <div className="waypointButtonWrapper">
        <MuiThemeProvider theme={addTheme}>
          <Button
            size="large"
            variant="outlined"
            // onClick={() => this.props.addWaypoint()}
            onClick={this.getchecked}
            disabled={this.props.disableAddMarker}
            color="primary"
          >
            <Icon>add</Icon>
            Add
          </Button>
        </MuiThemeProvider>
        <MuiThemeProvider theme={removeTheme}>
          <Button
            size="large"
            variant="outlined"
            onClick={this.props.removeMarker}
            disabled={this.props.disableRemoveMarker}
            color="primary"
          >
          <Icon>delete</Icon>
          Remove
        </Button>
        
        </MuiThemeProvider>
      </div>
      <div className="waypointContainer">
      <WaypointCreateCard 
        checked={this.state.checked}
        handleChange={this.props.handleChange}
        handleDateChange={this.props.handleDateChange}
        handleTimeChange={this.props.handleTimeChange}
        eta={this.props.eta}
        time={this.props.time}
        handleNewWaypoint={this.props.handleNewWaypoint}
        saveLocationEnabled={this.props.saveLocationEnabled}
        />
      {this.props.wayPoints.map((wayPoint, index) => {
        return (
          <WayPoint
            time={this.props.time}
            handleDateChange={this.props.handleDateChange}
            handleTimeChange={this.props.handleTimeChange}
            eta={this.props.eta}
            wayPoint={wayPoint}
            wayPointKey={index}
            key={index}
            handleChange={this.props.handleChange}
            activateMap={this.props.activateMap}
            handleNewWaypoint={this.props.handleNewWaypoint}
            disableAddMarker={this.props.disableAddMarker}
            handleWayPointExpand={this.props.handleWayPointExpand}
            expanded={this.props.expanded}
            saveLocationEnabled={this.props.saveLocationEnabled}
          />
        );
      })}
    </div>
      <Divider />
    <Typography
          variant="display1"
          component="h3"
          className="waypointStartEnd"
        >
        End
        </Typography>
    </Paper>
  );
};}

export default WaypointList;
