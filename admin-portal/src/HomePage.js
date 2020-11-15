import React from 'react'
import './HomePage.css';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
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
            </div>
        </React.Fragment>
        
        
    )
}


