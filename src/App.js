import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Adapt to Survive</h1>
        </header>

        <p className="App-intro"> An Inconvenient Game
        </p>

        <img src="/images/world.gif" className="App-gif" id="gifleft" alt="logo" />
        <img src="/images/world.gif" className="App-gif" id="gifright" alt="logo" />

        <h3> <span>Buy The Game!  <br/> </span> Call 1800-666-ADPT toll free today!
        </h3>

        <img src="/images/mockup.png" id="App-mockup" alt="mockup image" />


        <div className="App-body">
          <p> It is the year 2017. Donald Chump has been elected as the President of the United States - as a foolish and ignorant denier of climate change, environmental havoc is wrought upon the world as global warming accelerates faster than ever before. Objective: Work together with the rest of the ecosystems to prevent total destruction by global warming while also making the necessary adaptations to prepare yourself for inevitable catastrophe. Reach the end of your evolution path first to adapt and survive! </p>
        </div>


        <footer>
          Designed by Rob. Created by Rashid. Inspired by Katie. 
        </footer>
      </div>
    );
  }
}

export default App;
