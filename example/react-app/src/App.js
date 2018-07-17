import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sheep from './Sheep';
// import Wolf from './Wolf';
import Countdown from './Countdown';
// import Elements from './Elements';
import MyComponents from './Components';

const { Wolf } = MyComponents;

class App extends Component {

  componentDidMount() { }

  saySomething = (event) => {
    alert(event.detail);
  }

  render() {

    let content;
    if(Countdown) {
      content = <Countdown seconds={15}></Countdown>
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Sheep name="Tim"></Sheep>
        <Wolf name="Winston" onRevealed={this.saySomething}></Wolf>
        {content}
        <countdown-timer seconds={5}></countdown-timer>
        <ng-wolf name="Winston"></ng-wolf>
        
      </div>
    );
  }
}

export default App;
