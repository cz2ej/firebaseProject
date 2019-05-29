import React from 'react';
import Navbar from "./Navbar"
import firebase from "./firebase.js"
//import logo from './logo.svg';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    logout = () => {
        console.log("in logout")
        firebase.auth().signOut();
    }


render(){
    return(
        <div>
            <Navbar />
            <h1>HomePage</h1>
            <button onClick = {this.logout}>logout</button>
        </div>
    )
}
}
