// --> Initializing React <--
import React from 'react';
import './Header.css';

// --> Initializing Material-UI <--
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// --> Initial Imported Components <--


// --> Material-UI makeStyles <--
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "white",
    height: "200vmin",
    backgroundColor: "white"
  },
  grid: {
    backgroundColor: "black"
  },
  button: {
    backgroundColor: "#282c34",
    color: "white",
  },
  Typography: {
    fontSize: "50px",
    color: "White",
    textAlign: 'center',
  }



}));



export default function Header() {

  const mui = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={0} className={mui.paper}>
          <Typography className={mui.Typography}>Hello Calendar Scheduler</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

