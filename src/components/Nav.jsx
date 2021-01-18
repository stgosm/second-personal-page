import React, { useState } from 'react';
import { Switch, AppBar, Toolbar, IconButton, Grid } from "@material-ui/core";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ThemeProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

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
      justifyContent: 'space-between',
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

  function Nav() {
    
    return (
        <AppBar position="static" color="primary">
          <Toolbar className={classes.menuToolbar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="fade-menu" aria-haspopup="true" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem to="/" onClick={handleClose}>Home</MenuItem>
                <MenuItem to="/certificates" onClick={handleClose}>Certificates</MenuItem>
              </Menu>
            <Grid component="label" container className={classes.gridTheme} alignItems="center" >
              <Grid item className={classes.gridItemTheme}><Brightness7Icon style={{ fontSize: 20 }} /></Grid>
              <Grid item className={classes.gridItemTheme}><Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/></Grid>
              <Grid item className={classes.gridItemTheme}><NightsStayIcon style={{ fontSize: 20 }} /></Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    )
  }

  export default Nav;