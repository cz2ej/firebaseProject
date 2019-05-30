import React, { Component } from 'react';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';

 class Pomodoro extends React.Component {

state = {
    time: null,
    duration: null
}
    onTimerUpdate = ({ time, duration })=> {
        this.setState({
            time,
            duration,
        });
    }

    render() {
        const {
            time,
            duration,
        } = this.state;

        return (
            <div>
                <Timer active duration={25 * 60 * 1000} onTimeUpdate={this.onTimerUpdate} />
                <Timecode time={duration - time} />
            </div>
        );
    }
}

export default Pomodoro;