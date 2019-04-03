import React, { Component } from 'react';
import './App.css';
// import Input from './components/Input.jsx';
import Button from './components/Button';
// import ClearButton from './components/ClearButton.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>/</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
