// --> Initialization of React <--
import React from 'react';
import './App.css';

// --> Initializing Material-UI <--
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  DayView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

// --> Other Components to be imported <--
import LandingCandy from './Components/Views/LandingCandy';
import MenuButtons from './Components/ComponentParts/MenuButtons/MenuButtons';
import Header from './Components/ComponentParts/Header/Header';
// import ScheduleTest from './Components/ComponentParts/ScheduleTest/ScheduleTest';

// --> Data <--
const currentDate = '2018-11-01';
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2018-11-01T12:00', endDate: '2018-11-01T13:30', title: 'Go to a gym' },
];

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
  },
  Typography: {
    fontSize: "50px",
    color: "White",
    textAlign: 'center',
  }



}));


function App() {
  const mui = useStyles();

  return (
    <div className="App-header">

      <Grid container spacing={3}>
        <Grid item xs={12}>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Header />
            </Grid>
          </Grid>

          <Grid container spacing={3}>

            <Grid item xs={8}>
              <Paper elevation={3} className={mui.paper}>
                <Paper elevation={3} className={mui.paper}>
                  <LandingCandy />
                </Paper>
              </Paper>
            </Grid>

            <Grid item xs={4}>
              <Paper elevation={3} className={mui.paper}>
                <Paper elevation={3} className={mui.paper}>
                  <MenuButtons ButtonName="Watch" />
                  <MenuButtons ButtonName="Insert Date" />
                  <MenuButtons ButtonName="Edit Date" />
                  <MenuButtons ButtonName="Delete Date" />
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
                  <Typography> Forms </Typography>
                </Paper>
              </Paper>
            </Grid>

            <Grid item xs={9}>
              <Paper elevation={3} className={mui.paper}>
                <Paper elevation={3} className={mui.paper}>
                  <Paper>
                    <Scheduler
                      data={schedulerData}
                    >
                      <ViewState
                        currentDate={currentDate}
                      />
                      <DayView
                        startDayHour={9}
                        endDayHour={14}
                      />
                      <Appointments />
                    </Scheduler>
                  </Paper>
                </Paper>
              </Paper>
            </Grid>

          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3} className={mui.paper}>
                <Paper elevation={3} className={mui.paper}>
                  <Typography> Table </Typography>
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
              <Typography> Footer </Typography>
            </Paper>
          </Paper>
        </Grid>


      </Grid>

    </div>
  );
}

export default App;
