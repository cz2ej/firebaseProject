import React from 'react';
import './App.css';
import profilePage from './profilePage';
import HomePage from "./HomePage";
import firebase from "./firebase.js"
import Login from "./Login"

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component {
  state = {
    user: {}

  }
  componentDidMount(){
    this.authListener();
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        //localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.user ? <HomePage/>:<Login/>}
      </div>
    //   <Router>
    //   <div className = "App">
    //   <Switch>
    //     <Route  path="/profile" component={profilePage} />
    //     <Route  path="/" component={HomePage} />
    //     </Switch>
    //   </div>

    // </Router>
    );
  }
}
export default App;
