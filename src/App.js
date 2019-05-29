import React from 'react';
import './App.css';
import ProfilePage from './ProfilePage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <ProfilePage />
      </MuiThemeProvider>

    </div>
  );
}


export default App;
