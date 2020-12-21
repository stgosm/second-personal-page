import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

function Main(){
    const classes = useStyles();

    return(
        <>
            <Typography variant="h1" component="h2" gutterBottom>
                h1. Heading
            </Typography>
        </>
    )
}

export default Main;