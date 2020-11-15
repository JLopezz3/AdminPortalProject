import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ReceiptIcon from '@material-ui/icons/Receipt';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#000000",
    opacity: "0.9",
    display: "flex",
  },
  finance: {
      objectFit: "contain",
      marginRight: theme.spacing(1),
      color: 'rgb(211, 168, 38)',
  },
  hr: {
    objectFit: "contain",
      marginRight: theme.spacing(1),
      color: 'rgb(211, 168, 38)',
  },
  sales: {
      objectFit: "contain",
      marginRight: theme.spacing(1),
      color: 'rgb(211, 168, 38)',
  },
  tech: {
      objectFit: "contain",
      marginRight: theme.spacing(1),
      color: 'rgb(211, 168, 38)',
  },
  support: {
      objectFit: "contain",
      marginRight: theme.spacing(1),
      color: 'rgb(211, 168, 38)',
  },
  title: {
    color: "lightgray",
    flexGrow: 1,
  },
  links: {
      textDecoration: "none",
      color: "inherit",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}position="static">
        <Toolbar variant="dense">
          <Typography className={classes.title}variant="h6">
            <Link to="/HomePage" className={classes.links}>AdminPortal</Link>
          </Typography>
            <Link to="/finance" className={classes.links}>
                <MonetizationOnIcon />
                <Button 
                    size="small"
                    color="inherit"
                    className={classes.finance}
                >
                    Finance
                </Button>
            </Link>
            <Link to="/hr" className={classes.links}>
                <SupervisorAccountIcon />
                <Button 
                    size="small"
                    color="inherit"
                    className={classes.hr}
                >
                    HR
                </Button>
            </Link>
            <Link to="/sales" className={classes.links}>
                <ReceiptIcon />
                <Button 
                    size="small"
                    color="inherit"
                    className={classes.sales}
                >
                    Sales
                </Button>
            </Link>
            <Link to="/tech" className={classes.links}>
                <LaptopChromebookIcon />
                <Button 
                    size="small"
                    color="inherit"
                    className={classes.tech}
                >
                    Tech
                </Button>
            </Link>
            <Link to="/support" className={classes.links}>
                <LiveHelpIcon />
                <Button 
                    size="small"
                    color="inherit"
                    className={classes.support}
                >
                    Support
                </Button>
            </Link>
                
        </Toolbar>
      </AppBar>
    </div>
  );
}