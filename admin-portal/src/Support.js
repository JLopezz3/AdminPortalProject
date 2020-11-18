import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import PageScroll from "./PageScroll";

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
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: "bold",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  myFinance: {
    backgroundImage: `url('https://images.unsplash.com/photo-1603714228681-b399854b8f80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1342&q=')`,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundSize: "cover",
    backgroundPosition: "0px -250px",
    backgroundRepeat: "no-repeat",
    width: "100wh",
  },
  contentHeader: {
    color: "white",
    fontWeight: "bold",
  },
  content: {
    color: "white",
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    background: "#000000",
    color: "#FFFFFF",
    opacity: "0.9",
  },
}));

export default function Support() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.myFinance}>
        <Container maxWidth="sm">
          <Typography className={classes.contentHeader} component="h1" variant="h2" align="center" gutterBottom>
              SUPPORT
          </Typography>
          <Typography className={classes.content} variant="h5" align="center"  paragraph>
              For customer support admin pages
              
          </Typography> 
          <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>     
        </Container>
      </div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
              {/* <AssignmentIcon /> */}
            <Typography className={classes.heading}>Manage User Accounts</Typography>
          </div>
          
        </AccordionSummary>
        <AccordionSummary>
          <div>
            <Typography>
              View a list of all finance reports from the 2020 fiscal year. 
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Visit website:
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                https:www.myprojectlink.com
              </a>
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            {/* <PaymentIcon /> */}
            <Typography className={classes.heading}>Assign Roles</Typography>
          </div>
          
        </AccordionSummary>
        <AccordionSummary>
          <div>
            <Typography>
                View Accounts Payable to see all short-term debts and obligations.
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>

          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Visit website:
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                https:www.myprojectlink2.com
              </a>
            </Typography>
          </div>
        </AccordionDetails>

      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            {/* <AccountBalanceIcon /> */}
            <Typography className={classes.heading}>Help Desk</Typography>
          </div>
         
        </AccordionSummary>
        <AccordionSummary>
          <div>
            <Typography>
               View Accounts Receivable from the 2020 fiscal year. 
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>

          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Visit website:
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                https:www.myprojectlink3.com
              </a>
            </Typography>
          </div>
        </AccordionDetails>

      </Accordion>
      <PageScroll showBelow={250} />
    <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            AdminPortal
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Made by Jerel Lopez, Seung Jung, & Abdul Aamir
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}