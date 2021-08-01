import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Chip from '@material-ui/core/Chip';
import Lottie from 'react-lottie';
import Typography from '@material-ui/core/Typography';

import logo from '../assets/monkey.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: 'Chewy',
    color: 'white',
    marginLeft: '5px',
  },
  title1: {
    fontFamily: 'Chewy',
    color: 'rgba(249, 211, 180, 1)',
    marginLeft: '5px',
  },
  appBar: {
    height: '80px',
    borderBottom: '0.4px solid #353945',
    background: '#141416',
  },
  chip: {
    borderColor: 'rgba(249, 211, 180, 1)',
    borderWidth: '2px',
    fontSize: 15,
    padding: 5,
    height: 40,
    borderRadius: 20,
    color: 'rgba(249, 211, 180, 1)',
  },
  empty: {
    flexGrow: 1,
  },
}));

export default function Header({
  web3Modal,
  loadWeb3Modal,
  logoutOfWeb3Modal,
}) {
  const classes = useStyles();

  const modalButtons = [];

  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <Chip
          className={classes.chip}
          label="Logout"
          onClick={logoutOfWeb3Modal}
          variant="outlined"
        />,
      );
    } else {
      modalButtons.push(
        <Chip
          className={classes.chip}
          label="Connect Wallet"
          onClick={loadWeb3Modal}
          variant="outlined"
        />,
      );
    }
  } else {
    console.log('no modal error');
    modalButtons.push(
      <Chip
        className={classes.chip}
        label="err..."
        onClick={loadWeb3Modal}
        variant="outlined"
      />,
    );
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appBar}>
          <Lottie
            options={defaultOptions}
            height={60}
            width={60}
          />
          <Typography variant="h6" className={classes.title}>
            Buy me a
          </Typography>
          <Typography variant="h6" className={classes.title1}>
            banana
          </Typography>
          <div className={classes.empty} />
          {modalButtons}
        </Toolbar>
      </AppBar>
    </div>
  );
}
