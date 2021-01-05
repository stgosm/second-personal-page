import React, { useState } from 'react';
import Main from './Main';
import { Switch, AppBar, Toolbar, IconButton, Grid } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ThemeProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import NightsStayIcon from '@material-ui/icons/NightsStay';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuToolbar: {
    display: 'display',
    justifyContent: 'flex-end',
  },
  gridTheme: {
    width: 'auto',
  },
  gridItemTheme: {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
  },
}));

const ThemeSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#607d8b',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#607d8b',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[500]}`,
    backgroundColor: theme.palette.grey[400],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const classes = useStyles();  

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#424242",
      },
      secondary: {
        main: "#eceff1",
      },
    }
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#37474f",
      },
      secondary: {
        main: "#455a64"
      },
    }
  });

  return (
    <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline/>
          <AppBar position="static" color="primary">
            <Toolbar className={classes.menuToolbar}>
              <Grid component="label" container className={classes.gridTheme} alignItems="center" >
                <Grid item className={classes.gridItemTheme}><Brightness7Icon style={{ fontSize: 20 }} /></Grid>
                <Grid item className={classes.gridItemTheme}><ThemeSwitch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/></Grid>
                <Grid item className={classes.gridItemTheme}><NightsStayIcon style={{ fontSize: 20 }} /></Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          <Main/>
      </ThemeProvider>
    </>
  );
}

export default App;
