import React, { Component } from 'react';
import io from 'socket.io-client';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      msg: ""
    }
  }


  componentDidMount(){
    const socket = io.connect('/');
      socket.on('msg', (data) => {
        this.setState({msg:data});
      });
  }

  render() {
    return (
      <div>{this.state.msg}</div>
    )
  }
}

