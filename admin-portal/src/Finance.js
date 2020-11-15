
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { makeStyles } from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Container from "@material-ui/core/Container";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PaymentIcon from "@material-ui/icons/Payment";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';


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
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));


function Finance() {
const classes = useStyles();

  return (
    <div>
      <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              FINANCE
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
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
    </div>
  )
}

export default Finance;

