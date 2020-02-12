import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.svg'
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './views/Home';
import About from './views/About';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Tugas Minggu 1
        </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
        <header className="App">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
        <div>
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
