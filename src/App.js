import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';

class App extends Component {

  state = {
    foodDot : [10,10],
    snakeDots : [[0,0],[2,0],[4,0]]
  }

  render() {
    return (
      <div className="game-area">
        <Snake snakeDots={this.state.snakeDots}></Snake>
        <Food foodDot = {this.state.foodDot}></Food>
      </div>
    );
  }

}

export default App;
