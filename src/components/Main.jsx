import React from 'react';
import { Typography, Container, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  containerSocialMedia: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '90vh',
  },
  txtTypography: {
      textAlign: 'center',
  }
});

function Main(){
    const classes = useStyles();

    return(
        <>
            <Container 
            className={classes.containerSocialMedia}
            container
            maxWidth="md">
                <Typography variant="h3" className={classes.txtTypography} color="secondary">Santiago Serrano Márquez</Typography>
                <Grid item>
                    <IconButton href="https://www.facebook.com/santiago.serrano.marquez" >
                        <FacebookIcon fontSize="large" color="secondary"/>
                    </IconButton>
                    <IconButton href="https://github.com/stgosm">
                        <GitHubIcon fontSize="large" color="secondary"/>
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/in/santiago-serrano-márquez-0a6282159">
                        <LinkedInIcon fontSize="large" color="secondary"/>
                    </IconButton>
                    <IconButton href="https://www.instagram.com/stgosm/?hl=es-la">
                        <InstagramIcon fontSize="large" color="secondary"/>
                    </IconButton>
                </Grid>
            </Container>
        </>
    )
}

export default Main;