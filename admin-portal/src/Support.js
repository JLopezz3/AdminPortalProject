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
import { motion } from 'framer-motion';

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

const pageVariants = {
  initial: {
    opacity: 0,
    width: "100%",
  },
  in: {
    opacity: 1,
    width: "100%",
  },
  out: {
    opacity: 1,
    width: "100%",
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.2
};

const pageStyle = {
  position: "absolute"
};

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
  buttonColor: {
    background: "#000000",
    opacity: "0.9",
    color: 'white',
    "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#FFFFFF',
            backgroundColor: 'rgb(176 113 41)'
        },
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
    backgroundImage: `url('https://img2.pngio.com/american-black-man-working-in-tech-support-working-indian-indian-technical-support-png-1920_1080.png')`,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundSize: "cover",
    backgroundPosition: "0px -190px",
    backgroundRepeat: "no-repeat",
    width: "100wh",
  },
  contentHeader: {
    color: 'rgb(211, 168, 38)',
    fontWeight: "bold",
  },
  content: {
    color: 'rgb(211, 168, 38)',
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
      <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      >
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
                  <Button className={classes.buttonColor} variant="contained">
                    Contact Us
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
              To manage user accounts please click the following link
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
                https:www.myaccounts.com
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
                To assign roles please click the following link
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
                https:www.myroles.com
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
               To reach the Help Desk, please click the following link
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
                https:www.myhelpdesk.com
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
      </motion.div>
    </div>
    
  );
}