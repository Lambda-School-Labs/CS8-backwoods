import React from 'react';
import TripCreateForm from './TripCreateForm.jsx';
import Map from './Map.jsx';
import WaypointList from './WaypointList';
import slugify from 'slugify';
import axios from 'axios';

class TripCreate extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      tripName: '',
      wayPoints: [],
      numberOfWayPoints: 0,
      startDate: '',
      endDate: '',
      email: '',
      fireRedirect: false,
      markerName: '',
      eta: '',
      lng: '',
      lat: '',
      tripId: '',
      markers: [{ lat: 37.73018235769022, lng: -122.33512938022614 }]
    }
  }
  addWaypoint = () => {
    let newWayPoint = {
      markerName: 'bla',
      eta: '',
      long: '',
      lat: '',
      tripId: ''
    }
    this.setState({ 
      wayPoints: [...this.state.wayPoints, newWayPoint]
    })
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleWaypointChange = (e, wayPointKey) => {
    console.log(e.target.value)
    console.log(wayPointKey)
    let updatedWayPoint = {
      markerName: e.target.value,
      eta: '',
      long: '',
      lat: '',
      tripId: ''
    }
    this.setState({
      wayPoints: [...this.state.wayPoints, updatedWayPoint]
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    const { tripName, startDate, endDate } = this.state;
    const { email } = this.props;
    const slug = slugify(tripName)
    // Deploy axios call
    // axios.post(`https://ancient-inlet-94126.herokuapp.com/createTrips`, { tripName, startDate, endDate, email }, { headers: { authorization: token } })
    // Test axios call
    axios.post(`http://localhost:8000/createTrips`, { tripName, startDate, endDate, email, slug: slug }, { headers: { authorization: token } })
      .then(res => {
        this.props.getUsersAgain();
        this.setState({ fireRedirect: true })
        console.log(res);
      }).catch(error => {
        console.log(error);
      })
  }

  addMarker = event => {
    console.log('== CLICK ==');
    console.log('X:', event.x);
    console.log('Y:', event.y);
    console.log('LAT:', event.lat);
    console.log('LNG:', event.lng);
    let lat = event.lat;
    let lng = event.lng;

    const marker = {
      lat: lat,
      lng: lng
    };

    this.state.markers.push(marker);
    this.setState({ lat: lat, lng: lng });
    console.log(this.state.markers);
  };


  render() {
    return (
      <div>
        <TripCreateForm 
          email={this.props.email}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          fireRedirect={this.state.fireRedirect}
        />
        <Map  
          addMarker={this.addMarker}
          markers={this.state.markers}
        />
        <WaypointList
          handleChange={this.handleChange}
          addWaypoint={this.addWaypoint} 
          wayPoints={this.state.wayPoints}
        />
      </div>
    );
  }
};

export default TripCreate;
