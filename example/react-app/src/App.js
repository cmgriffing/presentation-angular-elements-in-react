import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sheep from './Sheep';

import MyComponents from './Components';
const { Wolf } = MyComponents;

class App extends Component {

  state = {
    sheepImage: './sheep.jpg',
    wolfImage: './sheep.jpg'
  }
  revealed = false;

  sheep = [...new Array(8)].map(() => {
    // Uses random value to decide which element to turn into a wolf
    return Math.random() > 0.2;
  });

  componentDidMount() { }

  saySomething = (event) => {
    console.log(event.detail);
    if(event.target.tagName === 'NG-WOLF') {
      this.setState({
        wolfImage:'./wolf.jpg'
      });
    } else {
      event.target.style['opacity'] = 0.5;
    }
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {this.sheep.map((item, index) => {
          return item ?
            <Sheep key={index} avatar={this.state.sheepImage} name="Tim" onRevealed={this.saySomething}></Sheep> :
            <Wolf key={index} avatar={this.state.wolfImage} name="Winston" onRevealed={this.saySomething}></Wolf>;
        })}

      </div>
    );
  }
}

export default App;
