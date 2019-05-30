import React from 'react';
import Navbar from "./Navbar"
import firebase from "./firebase.js"
import TaskData from "./TaskData.js"
import Countdown from "./CountdownOld.js"
import CountdownNew from "./CountdownNew.js"
import Timer from "./Timer"
//import logo from './logo.svg';
import profilePage from './profilePage';


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

            <div>
                <Navbar />
                <CountdownNew />
                <TaskData />
                <button onClick={this.logout}>logout</button>
            </div>


           

        )
    }
}
