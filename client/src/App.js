// --> Initialization of React <--
import React from 'react';
import './App.css';

// --> Initializing Material-UI <--
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="jumbotron border bg-warning">Hello React </div>
      </header>
    </div>
  );
}

export default App;
