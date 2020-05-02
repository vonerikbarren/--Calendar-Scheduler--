// --> React Strict <--
import React from 'react';

// --> Material-UI specific <--
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// --> Components imported <--

// --> makeStyles const <--
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
// --> Other <--

