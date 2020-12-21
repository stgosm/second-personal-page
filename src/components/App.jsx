import React, { useContext, useState } from 'react';
import Main from './Main';
import { Switch, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

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
        main: "#78909c",
      },
    }
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#eeeeee"
      },
    }
  });

  return (
    <>
      
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <CssBaseline/>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
            </Toolbar>
          </AppBar>
        <Main/>
      </ThemeProvider>
    </>
  );
}

export default App;
