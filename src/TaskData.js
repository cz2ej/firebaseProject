import firebase from "./firebase.js";
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class TaskData extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          date: "",
          time: "",
          details: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick = event => {
        var tempDate = new Date();
        var currDate = (tempDate.getMonth()+1) + '-' + tempDate.getDate() + "-" + tempDate.getFullYear();
        var currTime = tempDate.getHours() + ":" + tempDate.getMinutes();
        var userId = firebase.auth().currentUser.uid;
        console.log(userId);
        const taskRef = firebase.database().ref('users/' + userId + '/tasks');
            const task = {
                date: currDate,
                details: this.state.details,
                time: currTime
            };

            taskRef.push(task);
    };

    handleChange = field => event => {
        console.log(event.target.value);
        this.setState({
            // [event.target.name]: event.target.value
            [field]: event.target.value
        })
    }
    render(){
        return(
            <div>
                <div class="box">
                <h1>Enter Task Details</h1>
                        <TextField 
                        id="filled-name"
                        label="Details" 
                        value={this.state.details}
                        onChange={this.handleChange('details')}
                        variant="filled"
                        margin="normal"
                        /><br></br>
                    <Button 
                    onClick={this.handleClick}
                    variant="contained"
                    color = "primary"
                    >Submit</Button><br></br>
            </div>
            </div>
        )
    }
    }