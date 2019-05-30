import React, { Component } from "react";


class CountdownNew extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 6000,
    didCountDownFrom25: true,
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });

        //if we counted down from 25 initialize timer to 5 min break time
      } else if(this.state.didCountDownFrom25){
        console.log(newTime)
        clearInterval(this.timer);
        this.setState({
          timerOn: false,
          timerStart: 0,
          timerTime: 5000,
          didCountDownFrom25: false
        });
        
        //alert("Countdown ended");
      }
      //if break is over initialize clock back to 25
      else{
        clearInterval(this.timer);
        this.setState({
          timerOn: false,
          timerStart: 0,
          timerTime: 6000,
          didCountDownFrom25: true
        });

      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: 6000
      });
    }

  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    // let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="CountdownOuterContainer">
        <div className="CountdownContainer">
          <div className="Countdown">
            <div className="Countdown-header">Countdown</div>
            <div className="Countdown-label">Minutes : Seconds</div>
            <div className="Countdown-display">


              <div className="Countdown-time">
                {minutes} : {seconds}
              </div>

            </div>

            {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
              <button className="Button-start" onClick={this.startTimer}>
                Start
          </button>
            )}
            {timerOn === true && /*timerTime >= 1000 && */(
              <button className="Button-stop" onClick={this.stopTimer}>
                Stop
          </button>
            )}
            {timerOn === false &&
              (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                <button className="Button-start" onClick={this.startTimer}>
                  Resume
            </button>
              )}
             {/* {timerOn === false && !this.state.didCountDownFrom25 && (timerStart === 0 || timerTime === timerStart) && (
              <button className="Button-start" onClick={this.startTimer}>
                Start Break
          </button>
            )} */}
            {/* {timerOn === false  &&
              (timerStart !== timerTime && timerStart > 0) && (
                <button className="Button-reset" onClick={this.resetTimer}>
                  Reset
            </button>
              )} */}

          </div>
        </div>
      </div>

    );
  }
}

export default CountdownNew;
