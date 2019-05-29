import React from 'react';
import Navbar from "./Navbar"
//import logo from './logo.svg';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }


render(){
    return(
        <div>
            <Navbar />
            <h1>HomePage</h1>
        </div>
    )
}
}
