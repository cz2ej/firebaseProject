import React from 'react';
import Navbar from "./Navbar"
import firebase from "./firebase.js"
import TaskData from "./TaskData.js"

//import logo from './logo.svg';
import profilePage from './profilePage';
import Home from "./Home"

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export default class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        console.log("in logout")
        firebase.auth().signOut();
    }


    render() {
        return (

            // <div>
            //     <Navbar />
            //     <TaskData />
            //     <button onClick={this.logout}>logout</button>
            // </div>


            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/profile" component={profilePage} />
                         <Route path="/" component={Home} /> 
                    </Switch>
                </div>
            </Router>

        )
    }
}
