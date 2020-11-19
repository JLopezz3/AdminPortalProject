import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')`,
    backgroundColor: theme.palette.background.paper,
    backgroundSize: "cover",
    padding: theme.spacing(8, 0, 6),
  },
  contentHeader: {
    color: 'rgb(211, 168, 38)',
    fontWeight: "bold",
  },
  content: {
    color: 'rgb(211, 168, 38)',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
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

const cards = [
  {
    img: "https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    header: "New Hire On-boarding",
    info: "This is for new hire on-boarding pages"
  },
  {
    img: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80",
    header: "Benefits",
    info: "This is for benefits pages"
  },
  {
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1772&q=80",
    header: "Payroll",
    info: "This is for payroll pages"
  },
  {
    img: "https://images.unsplash.com/photo-1585695968280-f2d03c1cafb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    header: "Off-boarding",
    info: "This is for off-boarding pages"
  },
  {
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    header: "HR Reports",
    info: "This is for HR Reports pages"
  },
] ;

export default function HR() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography className={classes.contentHeader} component="h1" variant="h2" align="center" gutterBottom>
              HR ADMIN
            </Typography>
            <Typography className={classes.content} variant="h6" align="justify"  >
            The annual HR reports on recruitment, interviewing, and workplace benefits can be viewed by admins only
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {card.header}
                    </Typography>
                    <Typography>
                    {card.info}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <PageScroll showBelow={250} />
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          AdminPortal
        </Typography>
        <Typography variant="subtitle1" align="center" component="p">
          Made by Jerel Lopez, Seung Jung & Abdul Aamir
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

