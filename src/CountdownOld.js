import React, { Component } from 'react'
import { useTimer } from 'react-timer-hook';
 
function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
 
 
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        var t = new Date();
        t.setSeconds(t.getSeconds() + 1500);
        restart(t)
      }}>restart</button>
    </div>
  );
}
 
export default function App() {
  var t = new Date();
  t.setSeconds(t.getSeconds() + 1500); // 10 minutes timer
  console.log(t.getSeconds())
  return (
    <div>
      <MyTimer expiryTimestamp={t} />
      {console.log(t.getSeconds())}
    </div>
  );
}