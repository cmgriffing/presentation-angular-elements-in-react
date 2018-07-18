import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sheep extends Component {

  static propTypes = {
    name: PropTypes.string,
    onRevealed: PropTypes.func,
    avatar: PropTypes.string
  }

  saySomething = (event) => {
    event.detail = `Hello. I am ${this.props.name} the SheepComponent.`;
    this.props.onRevealed(event);
  }

  render() {
    return <img className="sheep" src={this.props.avatar} onClick={this.saySomething} alt="Sheep" />
  }
}

export default Sheep;