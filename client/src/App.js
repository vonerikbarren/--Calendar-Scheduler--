// --> Initialization of React <--
import React from 'react';
import './App.css';

// --> Initializing Material-UI <--
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// --> Initialization of makeStyles from Material-UI <--
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    backgroundColor: "Transparent"
  },
  grid: {
    backgroundColor: "black"
  },
  button: {
    backgroundColor: "#282c34",
    color: "white",
  }



}));


function App() {
  const mui = useStyles();

  return (
    <div className="App-header">

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>

            <Grid item xs={8}>
              <Paper elevation={3} className={mui.paper}>
                <Paper elevation={3} className={mui.paper}>
                  <Typography> LandingCandy </Typography>
                </Paper>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper elevation={3} className={mui.paper}>
                <Paper elevation={3} className={mui.paper}>
                  <Typography> Menu </Typography>
                </Paper>
              </Paper>
            </Grid>

          </Grid>
        </Grid>

        <br />
        <Grid item xs={12}>
          <Paper elevation={0} className={mui.paper}>
            <Paper elevation={0} className={mui.paper}>

            </Paper>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3}>

            <Grid item xs={3}>
              <Paper elevation={3} className={mui.paper}>
                <Paper elevation={3} className={mui.paper}>
                  <Typography> Hello React </Typography>
                </Paper>
              </Paper>
            </Grid>

            <Grid item xs={9}>
              <Paper elevation={3} className={mui.paper}>
                <Paper elevation={3} className={mui.paper}>
                  <Typography> Hello React </Typography>
                </Paper>
              </Paper>
            </Grid>

          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} className={mui.paper}>
                <Paper elevation={3} className={mui.paper}>
                  <Typography> Hello React </Typography>
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <br />
        <Grid item xs={12}>
          <Paper elevation={0} className={mui.paper}>
            <Paper elevation={0} className={mui.paper}>
              <Typography></Typography>
            </Paper>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} className={mui.paper}>
            <Paper elevation={3} className={mui.paper}>
              <Typography> Hello React </Typography>
            </Paper>
          </Paper>
        </Grid>


      </Grid>

    </div>
  );
}

export default App;
