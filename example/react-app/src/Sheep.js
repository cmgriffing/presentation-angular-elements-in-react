import React, { Component } from 'react';

class Sheep extends Component {
  render() {
    return <span>{this.props.name}</span>
  }
}

export default Sheep;