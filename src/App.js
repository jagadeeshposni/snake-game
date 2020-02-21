import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';

const getRandomCoordinates = () => {
  let max = 98;
  let min = 1;

  let x = Math.floor((Math.random()*(max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random()*(max - min + 1) + min) / 2) * 2;
  return [x,y];
}

class App extends Component {

  state = {
    foodDot : getRandomCoordinates(),
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
