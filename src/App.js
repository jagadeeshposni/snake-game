import React, { Component } from 'react';

class App extends Component {


  render() {
    return (
      <div className="game-area">

        <div className="snake-dot" style={{ left: 0, top: 0 }}></div>
        <div className="snake-dot" style={{ left: '2%', top: 0 }}></div>
        <div className="snake-dot" style={{ left: '4%', top: 0 }}></div>
        <div className="snake-dot" style={{ left: '6%', top: 0 }}></div>

      </div>
    );
  }

}

export default App;
