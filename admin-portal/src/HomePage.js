import React from 'react'
import './HomePage.css';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="#FFFFFF" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    background: "#000000", 
    color: "#FFFFFF", 
    opacity: "0.9",
  },
}));

export default function HomePage() {
const classes = useStyles();

    return (
        <React.Fragment>
            <div className="home">
                <div className="home__container">
                    <Typography className="title" variant="h1" component="h2" gutterBottom>
                        Welcome to AdminPortal!
                    </Typography>
                    <img 
                        className="home__wallpaper"
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                        alt="" 
                        /> 
                </div>
                {/* Footer */}
                <footer className={classes.footer} >
                  <Typography variant="h6" align="center" gutterBottom>
                    AdminPortal
                  </Typography>
                  <Typography variant="subtitle1" align="center" component="p">
                    Made by Jerel Lopez, Seung Jung & Abdul Aamir
                  </Typography>
                  <Copyright />
                </footer>
                {/* End footer */}
            </div>
        </React.Fragment>
        
        
    )
}


