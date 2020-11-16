
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Container from "@material-ui/core/Container";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PaymentIcon from "@material-ui/icons/Payment";
import Link from '@material-ui/core/Link';
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
  verticalElementTitle: {
    margin: 0,
  },
  verticalElementSubtitle: {
    margin: 0,
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(2, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  heroContent: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundSize: "cover",
  },
  contentHeader: {
    color: 'rgb(211, 168, 38)',
    fontWeight: "bold",
  },
  content: {
    color: 'rgb(211, 168, 38)',
    fontWeight: "bold",
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    background: "#000000", 
    color: "#FFFFFF", 
    opacity: "0.9",
  },
}));


function Finance() {
const classes = useStyles();

  return (

    <div>
      <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography className={classes.contentHeader} component="h1" variant="h2" align="center" gutterBottom>
              FINANCE
            </Typography>
            <Typography className={classes.content}variant="h5" align="center" color="textSecondary" paragraph>
              Below are the links for finance
            </Typography>
          </Container>
        </div>
      <VerticalTimeline layout={'1-column-left'}>
        <VerticalTimelineElement
          className={classes.IconStyle}
          iconStyle={{ background: 'rgb(176 113 41)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(176 113 41)' }}
          icon={<AssignmentIcon />}
        >

          <h3 className={classes.verticalElementTitle}>Finance Reports</h3>
      
          <p>
            All the finance reports for the 2019-2020 fiscal year 
            </p>
            <div className={clsx(classes.column, classes.helper)}>
              <Typography variant="caption">
                View source link
                <br />
              </Typography>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={classes.IconStyle}
          iconStyle={{ background: 'rgb(176 113 41)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(176 113 41)' }}

          icon={<PaymentIcon/>}
        >

          <h3 className={classes.verticalElementTitle}>Accounts Payable</h3>
          <p>
            All the Accounts Payable for the 2019-2020 fiscal year 
            </p>
            <div className={clsx(classes.column, classes.helper)}>
              <Typography variant="caption">
                View source link
                <br />
              </Typography>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={classes.IconStyle}
          iconStyle={{ background: 'rgb(176 113 41)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(176 113 41)' }}
          icon={<AccountBalanceIcon />}
        >

          <h3 className={classes.verticalElementTitle}>Accounts Receivable</h3>
          <p>
            All the Accounts Receivable for the 2019-2020 fiscal year 
            </p>
            <div className={clsx(classes.column, classes.helper)}>
              <Typography variant="caption">
                View source link
                <br />
              </Typography>
            </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={classes.IconStyle}
          iconStyle={{ background: 'rgb(176 113 41)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(176 113 41)' }}
          icon={<PaymentIcon />}
        >

          <h3 className={classes.verticalElementTitle}>Tax</h3>
          <p>
            All the tax reports for the 2019-2020 fiscal year 
            </p>
            <div className={clsx(classes.column, classes.helper)}>
              <Typography variant="caption">
                View source link
                <br />
              </Typography>
            </div>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
      <PageScroll showBelow={250} />
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
    
  )
}

export default Finance;

