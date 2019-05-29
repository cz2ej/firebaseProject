import React from 'react';
import Navbar from "./Navbar"
import TaskData from "./TaskData.js"
import Countdown from "./Countdown.js"
//import logo from './logo.svg';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }


render(){
    return(
        <div>
            <Navbar />
            <Countdown />
            <TaskData />
        </div>
    )
}
}
