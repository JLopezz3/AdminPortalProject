import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { motion } from "framer-motion";

function Copyright() {
  return (
    <Typography variant="body2" color="#FFFFFF" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
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
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1.2,
};

const pageStyle = {
  position: "absolute",
};

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
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80')`,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundSize: "cover",
    backgroundPosition: "0px -520px",
    backgroundRepeat: "no-repeat",
    width: "100wh",
  },
  saleHeader: {
    color: "rgb(211, 168, 38)",
    fontWeight: "bold",
  },
  saleContent: {
    color: "rgb(211, 168, 38)",
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
  buttonLink: {
    background: "rgb(176 113 41)",
    opacity: "0.9",
    color: "white",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#FFFFFF",
      backgroundColor: "#000000",
    },
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
    display: "block",
    width: "100%",
  },
}));

const tiers = [
  {
    title: "Reports",
    description: ["Sales Reports generated for the 2020 season are now available. Click the link below to view"],
    buttonText: "Reports Link",
    buttonVariant: "outlined",
  },
  {
    title: "Leads",
    description: ["Sales Leads generated for the 2020 season are now available. Click the link below to view"],
    buttonText: "Leads Link",
    buttonVariant: "contained",
  },
  {
    title: "Demo",
    description: ["Sale Demos generated for the 2020 season are now available. Click the link below to view"],
    buttonText: "Demo Link",
    buttonVariant: "outlined",
  },
];

export default function Sales() {
  const classes = useStyles();

  return (
    <div>
      <motion.div
        style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={classes.salesBG}>
          {/* Hero unit */}
          <Container maxWidth="sm">
            <Typography
              className={classes.saleHeader}
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              SALES
            </Typography>
            <Typography
              className={classes.saleContent}
              variant="h5"
              align="center"
              color="textSecondary"
              component="p"
            >
              The reports, leads and demo for sales are attached below
            </Typography>
          </Container>
          {/* End hero unit */}
        </div>
        <Container
          className={classes.saleBody}
          Container
          maxWidth="xl"
          component="main"
        >
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Demo" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    subheaderTypographyProps={{ align: "center" }}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="h5"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      className={classes.buttonLink}
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

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
      </motion.div>
      {/* End footer */}
    </div>
  );
}
