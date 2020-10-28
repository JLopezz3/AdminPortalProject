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
                    <img 
                        className="home__wallpaper"
                        src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80"
                        alt="" 
                        />
                </div>
            </div>
        </React.Fragment>
        
        
    )
}


