import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import classNames from 'classnames';
import Link from "@material-ui/core/Link";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PaymentIcon from "@material-ui/icons/Payment";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
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
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: 'bold',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  myFinance: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    padding: theme.spacing(8, 0, 6),
    },
}));

export default function DetailedAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.myFinance}>
              <Container maxWidth="sm">
            <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
                  Finance
                </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                      Body section of Finance page....
                  </Typography>
                    
                  </Container>

      </div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
              <AssignmentIcon />
            <Typography className={classes.heading}>Finance Reports</Typography>
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
            <PaymentIcon />
            <Typography className={classes.heading}>Accounts Payable</Typography>
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
            <AccountBalanceIcon />
            <Typography className={classes.heading}>Accounts Receivable</Typography>
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
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <AttachMoneyIcon />
            <Typography className={classes.heading}>Tax</Typography>
          </div>
          
        </AccordionSummary>
        <AccordionSummary>
          <div>
            <Typography>
                View a list of all tax reports from the 2020 fiscal year. 
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
    <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
            AdminPortal
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Made by Jerel Lopez, Seung Jung, & Abdul Aamir
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}