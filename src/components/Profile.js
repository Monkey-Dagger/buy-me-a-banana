import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import shreyas from '../assets/shreyas.png';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#141416',
    color: 'white',
    flexGrow: 1,
    height: '120vh',
  },
  head: {
    height: '148px',
    borderBottom: '0.4px solid #353945',
    alignContent: 'center',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.primary,
    background: '#141416',
  },
  avatar: {
    height: '100px',
    width: '100px',
    marginLeft: 'auto',
  },
  title: {
    fontWeight: 'medium',
    textAlign: 'left',
    fontSize: 22,
  },
  supporters: {
    textAlign: 'left',
    fontSize: 16,
    color: 'rgba(249, 211, 180, 1)',
  },
}));

export default function Profile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.head}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Avatar src={shreyas} className={classes.avatar} />
          </Grid>
          <Grid item xs={6}>
            <p className={classes.title}>
              Shreyas Papinwar is the creator of buy me a banana.
            </p>
            <p className={classes.supporters}>
              0 supporters
            </p>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
      </Toolbar>
    </div>
  );
}
