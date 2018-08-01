import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';

const WaypointList = (props) => {

  return (
    < Paper className="tripInfo" >
      <Typography
        className="tripInfo-startdate"
      >

        Start: {props.startDate}
      </Typography>
      <Typography
        className="tripInfo-endddate"
      >

        End: {props.endDate}
      </Typography>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Point 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Point 2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Point 3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper >
  );
}

export default WaypointList;