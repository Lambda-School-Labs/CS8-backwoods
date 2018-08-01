import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SingleTrip from './SingleTrip'
import { Link } from 'react-router-dom';
import './TripList.css';
class MainTriplist extends React.Component {
  render() {
    return (
      <div className="mainTripList">
        {
          this.props.trips.map((trip, index) => {
            return (
              <div key={index}>

                <SingleTrip tripName={trip.tripName}
                  createdAt={trip.createdAt}
                  updatedAt={trip.updatedAt}
                  startDate={trip.startDate}
                  endDate={trip.endDate}
                  slug={trip.slug}
                  email={trip.email}
                  id={trip.id}
                  archiveTrip={this.props.archiveTrip}
                  index={index}
                />

              </div>
            )

          })}
        <Paper className="trip" id="addNewTripWrapper" elevation={1}>

          <Typography
            variant="headline"
            component="h2"
          >

            Add your first trip!
          </Typography>
          <Link to={`/${this.props.user}/create`}>
            <Button
              variant="fab"
              color="primary"
              aria-label="Add"
            >
              <AddIcon />
            </Button>
          </Link>
        </Paper>
      </div>
    );
  }

};

export default MainTriplist;
