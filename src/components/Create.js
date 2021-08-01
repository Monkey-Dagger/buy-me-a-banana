import React from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {
  Link,
} from 'react-router-dom';
import { DropzoneArea } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { KeyboardBackspaceRounded, ArrowForwardIosRounded } from '@material-ui/icons';

const themeUpload = createMuiTheme({
  overrides: {
    MuiDropzoneArea: {
      root: {
        backgroundColor: '#141416',
        color: '#353945',
        borderColor: '#353945',
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#141416',
    color: 'white',
    flexGrow: 1,
    height: '120vh',
  },
  head: {
    height: '90px',
    borderBottom: '0.4px solid #353945',
  },
  middle: {
    verticalAlign: 'middle',
  },
  spacing: {
    flexGrow: 1,
  },
  chip: {
    borderColor: '#353945',
    borderWidth: '2px',
    fontSize: 14,
    padding: 5,
    height: 40,
    borderRadius: 20,
    fontWeight: 'bold',
    wordSpacing: 1.1,
    letterSpacing: 1.1,
    color: 'white',
  },
  navButtons: {
    color: theme.palette.secondary.contrastText,
    textTransform: 'none',
    marginRight: theme.spacing(1),
    fontSize: 14,
  },
  dataWidth: {
    width: '50vw',
    marginLeft: '25vw',
  },
  body: {
    justifyContent: 'center',
  },
  start: {
    marginLeft: theme.spacing(2),
  },
  up: {
    marginTop: theme.spacing(5),
  },
  endButton: {
    color: 'white',
    textTransform: 'none',
    marginRight: theme.spacing(2),
    fontSize: 14,
  },
  icon: {
    width: '10px',
    height: '10px',
    color: theme.palette.secondary.contrastText,
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: 'medium',
    wordSpacing: 1.1,
    letterSpacing: 1.1,
    paddingTop: '50px',
    marginBottom: '40px',
  },
  bodys: {
    maxWidth: '300px',
    color: theme.palette.secondary.contrastText,
  },
  contentCard: {
    justifyContent: 'center',
  },
  subhead: {
    fontSize: '14',
    textAlign: 'left',
  },
  subtitle: {
    color: theme.palette.secondary.contrastText,
    textAlign: 'left',
  },
  upload: {
    '& > *': {
      margin: theme.spacing(1),
    },
    height: '250px',
    background: theme.palette.secondary.dark,
    borderRadius: 20,
    marginTop: '20px',
    color: theme.palette.secondary.contrastText,
    marginBottom: theme.spacing(5),
  },
  temp: {
    marginTop: '85px',
  },
  inputColor: {
    color: theme.palette.secondary.contrastText,
  },
  none: {
    display: 'none',
  },
  chipBlue: {
    backgroundColor: 'rgba(55, 114, 255, 0.1)',
    fontSize: 16,
    padding: 5,
    height: 50,
    borderRadius: 25,
    color: 'rgb(55, 114, 255)',
    marginTop: theme.spacing(5),
  },
  form: {
    '& .MuiTextField-root': {
      '& fieldset': {
        borderColor: '#353945',
        color: theme.palette.secondary.contrastText,
      },
    },
    '& MuiInputBase-root': {
      color: theme.palette.secondary.contrastText,
    },
    '& MuiInputBase-input': {
      color: theme.palette.secondary.contrastText,
    },
    '& label.Mui-focused': {
      color: theme.palette.secondary.contrastText,
    },
    '& label.Mui-normal': {
      color: theme.palette.secondary.contrastText,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.secondary.contrastText,
      color: theme.palette.secondary.contrastText,
    },
    '& .MuiOutlinedInput-input': {
      borderColor: '#353945',
      color: theme.palette.secondary.contrastText,
    },
    '& .MuiOutlinedInput-label': {
      borderColor: '#353945',
      color: '#353945',
    },
    '& .MuiOutlinedInput-root': {
      color: theme.palette.secondary.contrastText,
      '& fieldset': {
        borderColor: '#353945',
        color: theme.palette.secondary.contrastText,
      },
      '&:hover fieldset': {
        borderColor: '#353945',
        color: '#353945',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#353945',
        color: theme.palette.secondary.contrastText,
      },
    },
  },
  drop: {
    '& .MuiDropzoneArea-root': {
      color: 'blue',
    },
  },
}));

export default function Create() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.head}>
        <div className={classes.start} />
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Chip
            className={classes.chip}
            avatar={<KeyboardBackspaceRounded color="#00000" />}
            label="Back to home"
            variant="outlined"
          />
        </Link>
        <div className={classes.spacing} />
        <Button className={classes.navButtons}>Home</Button>
        <ArrowForwardIosRounded className={classes.icon} />
        <Button className={classes.endButton}>Create Profile</Button>
      </Toolbar>
      <div className={classes.dataWidth}>
        <Typography variant="h4" className={classes.title} gutterBottom>
          Create your profile
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">
          <MuiThemeProvider theme={themeUpload}>
            <DropzoneArea
              onChange={(files) => console.log('Files:', files)}
              style={{ backgroundColor: 'black', borderColor: 'blue' }}
              dropzoneText="upload your image"
            />
          </MuiThemeProvider>
          <Typography variant="subtitle1" className={classes.subhead}>
            Full name
          </Typography>

          <TextField
            id="outlined-basic"
            color="white"
            placeholder="Shreyas Papinwar"
            size="medium"
            label=""
            variant="outlined"
            margin="normal"
            InputLabelProps={{ className: classes.inputColor }}
            fullWidth
          />

          <Typography variant="subtitle1" className={classes.subhead} gutterBottom>
            What are you creating?
          </Typography>
          <TextField
            id="outlined-basic"
            color="white"
            placeholder="creating piano music, building BuyMeABurger"
            size="medium"
            label=""
            variant="outlined"
            margin="normal"
            InputLabelProps={{ className: classes.inputColor }}
            fullWidth
          />
          <Typography variant="subtitle1" className={classes.subhead} gutterBottom>
            What are you creating?
          </Typography>

          <TextField
            id="outlined-basic"
            color="white"
            placeholder="creating piano music, building BuyMeABurger"
            size="medium"
            label=""
            variant="outlined"
            margin="normal"
            multiline
            InputLabelProps={{ className: classes.inputColor }}
            fullWidth
          />
          <Chip
            className={classes.chipBlue}
            label="Mint NFT"
          />
        </form>
      </div>
    </div>
  );
}
