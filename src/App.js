import React from 'react';
import './App.css';
<<<<<<< HEAD
import profilePage from './profilePage';
import HomePage from "./HomePage";



import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
=======
import HomePage from './HomePage.js'

function App() {
  return (
    <div className="App">
        <HomePage />
    </div>
  );
}
>>>>>>> firebase

class App extends React.Component {

  render() {
    return (
      <Router>
      <div className = "App">
      <Switch>
        <Route  path="/profile" component={profilePage} />
        <Route  path="/" component={HomePage} />
        </Switch>
      </div>

    </Router>
    );
  }
}
export default App;
