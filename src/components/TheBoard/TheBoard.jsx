import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../BottomNavBar/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';

class TheBoard extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        <button onClick={() => axios.get('/api/games/fromNflApi')}>API CALL - USE WITH CAUTION</button>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(TheBoard);
