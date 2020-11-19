import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PageScroll from "./PageScroll";

function Copyright() {
  return (
    <Typography variant="body2" color="#FFFFFF" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  salesBG: {
    backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')`,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundSize: "cover",
    backgroundPosition: '0px -450px',
    backgroundRepeat: 'no-repeat',
    width: '100wh',
    
  },
  saleBody: {
    paddingTop: "25px",
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
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
  phantom: {
    display: 'block',
    width: '100%',
  },

}));

const tiers = [
  {
    title: 'Reports',
    subheader: 'Most popular',
    description: ['Sales Reports', 'Email support'],
    buttonText: 'Reports Link',
    buttonVariant: 'outlined',
  },
  {
    title: 'Leads',
    subheader: 'Most popular',
    description: ['Sales Leads', 'Email support'],
    buttonText: 'Leads Link',
    buttonVariant: 'contained',
  },
  {
    title: 'Demo',
    subheader: 'Most popular',
    description: ['Sales Demo', 'Email support'],
    buttonText: 'Demo Link',
    buttonVariant: 'outlined',
  },
];


export default function Sales() {
  const classes = useStyles();

  return (
     <div>
       <div className={classes.salesBG}>
        {/* Hero unit */}
      <Container maxWidth="sm" >
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          SALES
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          This is where Sales links is going to be JFODSJFODSFJSDOFSOFJSOFJSOFSOFJSOFJSOFJSOFJSOFJSOFJSOFJSFJSOFJSFJSOFJSOFO
          This is where Sales links is going to be JFODSJFODSFJSDOFSOFJSOFJSOFSOFJSOFJSOFJSOFJSOFJSOFJSOFJSFJSOFJSFJSOFJSOFO
          This is where Sales links is going to be JFODSJFODSFJSDOFSOFJSOFJSOFSOFJSOFJSOFJSOFJSOFJSOFJSOFJSFJSOFJSFJSOFJSOFO
        </Typography>
      </Container>
      {/* End hero unit */}
      </div>
      <Container className={classes.saleBody} Container maxWidth = "xl"
      component = "main" >
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Demo' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> 

      <PageScroll showBelow={250} />
      {/* Footer */}
      <div className={classes.phantom}>
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


      {/* End footer */}
     </div>
  );
};  