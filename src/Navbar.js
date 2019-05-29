import React, { Component } from 'react';

//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { white } from 'ansi-colors';

class Navbar extends Component {

    
    
    render(){
       
        return (
           
            <nav>
                {/* <img className = "logo" src = "https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"></img> */}
                <ul className="nav-links">
                    {/* <Link style = {{color: 'white'}} to = {{pathname:"/"}}>
                        <li>Home</li>
                    </Link>
                    <Link style = {{color: 'white'}} to ={{pathname:"/profile"}}>
                        <li>Profile</li>
                    </Link> */}
                </ul>


            </nav>
        );
    }
}

export default Navbar;