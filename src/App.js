import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {

    artist: [],

  }

  async componentDidMount() {

    const response = await api.get('');

    this.setState({ artist: response.data});

  }

  render() {

    const { artist } = this.state;

    return (
      <div>
        {console.log(artist)}
      </div>
    );
  }
}

export default App;