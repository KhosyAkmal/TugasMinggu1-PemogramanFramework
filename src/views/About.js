import React, { Component } from 'react';
import logo from '../assets/logo.svg'
import '../App.css';

class About extends Component{
    render() {
        return (
            <div className="container">
      <header className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
        );
    }
}

export default About;