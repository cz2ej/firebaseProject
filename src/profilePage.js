import React, { Component } from 'react';
import Navbar from "./Navbar"
import firebase from "./firebase.js";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged( user => {
            if (user){
              var userId = firebase.auth().currentUser.uid;
                const tasksRef = firebase.database().ref('users/'+userId+'/tasks');
                tasksRef.on('value', (snapshot) => {
                    let tasks = snapshot.val();
                    let newState = [];
                    for(let task in tasks){
                        newState.push({
                            date: tasks[task].date,
                            details: tasks[task].details,
                            time: tasks[task].time
                        });
                    }
                    console.log(newState);
                    this.setState({
                        data: newState
                    });
                });
            }
          });

    }
    render() {
        return (
            <div>
                <Navbar />
                <h3>Task History</h3>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left"> Date</TableCell>
                                <TableCell align="left">Time</TableCell>
                                <TableCell align="left">Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(this.state.data.length > 0) && this.state.data.map(task => (
                                <TableRow>
                                    <TableCell align="left">{task.date}</TableCell>
                                    <TableCell align="left">{task.time}</TableCell>
                                    <TableCell align="left">{task.details}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>        
            </div>




        )

    }

}

