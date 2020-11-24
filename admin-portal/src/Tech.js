import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { DataGrid } from "@material-ui/data-grid";
import { motion } from "framer-motion";

import PhoneIcon from "@material-ui/icons/Phone";
import ForumIcon from "@material-ui/icons/Forum";

function Copyright() {
  return (
    <Typography variant="body2" color="#FFFFFF" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    width: "100%",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    width: "100%",
    scale: 1,
  },
  out: {
    opacity: 1,
    width: "100%",
    scale: 1.2,
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//Start of Application Monitoring
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "techid", headerName: "TechID", width: 100 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },

  {
    field: "contactLinks",
    headerName: "Contact Link",
    type: "link",
    width: 160,
  },
  {
    field: "applicationStatus",
    headerName: "Status",
    type: "status",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    techid: 23,
    lastName: "James",
    firstName: "LeBron",
    age: 35,
    contactLinks: "www.nbaGOAT.com",
    applicationStatus: "Complete",
  },
  {
    id: 2,
    techid: 42,
    lastName: "Gates",
    firstName: "Bill",
    age: 42,
    contactLinks: "www.microsoft.com",
    applicationStatus: "Complete",
  },
  {
    id: 3,
    techid: 89,
    lastName: "Bezos",
    firstName: "Jeff",
    age: 45,
    contactLinks: "www.amazon.com",
    applicationStatus: "Complete",
  },
  {
    id: 4,
    techid: 100,
    lastName: "Jobs",
    firstName: "Steve",
    age: 16,
    contactLinks: "www.apple.com",
    applicationStatus: "Complete",
  },
  {
    id: 5,
    techid: 65,
    lastName: "Musk",
    firstName: "Elon",
    age: 45,
    contactLinks: "www.tesla.com",
    applicationStatus: "Complete",
  },
  {
    id: 6,
    techid: 40,
    lastName: "Singh",
    firstName: "Raj",
    age: 150,
    contactLinks: "http://www2.cs.uh.edu/~rsingh/",
    applicationStatus: "Complete",
  },
  {
    id: 7,
    techid: 15,
    lastName: "Lopez",
    firstName: "Jerel",
    age: 23,
    contactLinks: "www.jerellopez.com",
    applicationStatus: "Complete",
  },
  {
    id: 8,
    techid: 12,
    lastName: "Jung",
    firstName: "Seung",
    age: 27,
    contactLinks: "www.seungjung.com",
    applicationStatus: "Complete",
  },
  {
    id: 9,
    techid: 69,
    lastName: "Aamir",
    firstName: "Abdul",
    age: 21,
    contactLinks: "abdulaamir.com",
    applicationStatus: "Complete",
  },
];
//End of Application Monitoring

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  contentHeader: {
    color: "rgb(211, 168, 38)",
    fontWeight: "bold",
  },
  content: {
    color: "rgb(211, 168, 38)",
  },
  tabNames: {
    display: "flex",
    justifyContent: "center",
  },
  heroContent: {
    backgroundImage: `url('https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')`,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    backgroundSize: "cover",
    backgroundPosition: "0px -150px",
    backgroundRepeat: "no-repeat",
    width: "100wh",
  },
  buttonColor: {
    background: "#000000",
    opacity: "0.9",
    color: "white",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#FFFFFF",
      backgroundColor: "rgb(176 113 41)",
    },
  },
  phoneIcon: {
    color: "#000000",
  },
  chatIcon: {
    color: "#000000",
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

  details: {
    display: "flex",
    flexDirection: "column",
  },
  contentCard: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  dev: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  },
  appDevPic: {
    height: "400px",
    width: "570px",
    margin: "0 130px",
  },
}));

export default function Tech() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [change, onChange] = useState(new Date());

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className={classes.root}>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              className={classes.contentHeader}
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
            >
              TECH
            </Typography>
            <Typography
              className={classes.content}
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Below are the links for Tech
            </Typography>
          </Container>
        </div>
        <AppBar style={{ background: "rgb(211, 168, 38)" }} position="static">
          <Tabs
            TabIndicatorProps={{ style: { backgroundColor: "black" } }}
            centered
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
          >
            <Tab
              style={{ fontWeight: "bold", color: "black" }}
              textColor="primary"
              label="Application Monitoring"
              {...a11yProps(0)}
            />
            <Tab
              style={{ fontWeight: "bold", color: "black" }}
              label="Tech Support"
              {...a11yProps(1)}
            />
            <Tab
              style={{ fontWeight: "bold", color: "black" }}
              label="App Development"
              {...a11yProps(2)}
            />
            <Tab
              style={{ fontWeight: "bold", color: "black" }}
              label="App Admin"
              {...a11yProps(3)}
            />
            <Tab
              style={{ fontWeight: "bold", color: "black" }}
              label="Release Management"
              {...a11yProps(4)}
            />
          </Tabs>
        </AppBar>
        {/* Start of ApplicationMonitoring */}
        <TabPanel className={classes.tabNames} value={value} index={0}>
          <div>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.contentCard}>
                  <Typography variant="h5" color="textSecondary">
                    Daily Application Monitoring Activity is Recorded Below.
                    Last 10 recent checks can be seen in the table
                  </Typography>
                </CardContent>
              </div>
            </Card>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
              />
            </div>
          </div>
        </TabPanel>
        {/* END of ApplicationMonitoring */}

        {/* START of TechSupport */}
        <TabPanel className={classes.tabNames} value={value} index={1}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                variant="h4"
                gutterBottom
              >
                Technical Support is available 24/7 through Phone and LiveChat
              </Typography>
              <Typography
                variant="h6"
                className={classes.phone}
                color="textSecondary"
              >
                Contact by Phone: <PhoneIcon className={classes.phoneIcon} />
              </Typography>
              <Typography variant="body1" component="p">
                1(800)-555-5555
              </Typography>
              <Typography
                variant="h6"
                className={classes.chat}
                color="textSecondary"
              >
                Contact by LiveChat: <ForumIcon className={classes.chatIcon} />
              </Typography>
              <CardActions>
                <Button className={classes.buttonColor} size="medium">
                  CHAT NOW
                </Button>
              </CardActions>
            </CardContent>
          </Card>
        </TabPanel>
        {/* END of TechSupport */}

        <TabPanel className={classes.tabNames} value={value} index={2}>
          <div>
            <Typography className={classes.dev} variant="h4">
              App Development
            </Typography>
          </div>
          <div>
            <Typography className={classes.dev} variant="h5">
              Our development team is committed to providing the best user
              experience
            </Typography>
          </div>
          <img
            className={classes.appDevPic}
            alt=""
            src={process.env.PUBLIC_URL + "/AppDev.png"}
          />
        </TabPanel>
        <TabPanel className={classes.tabNames} value={value} index={3}>
          <div>
            <Typography className={classes.dev} variant="h4">
              App Admin
            </Typography>
          </div>
          <div>
            <Typography className={classes.dev} variant="h5">
              App admin manages all site traffic
            </Typography>
          </div>
          <img
            className={classes.appDevPic}
            alt=""
            src={process.env.PUBLIC_URL + "/admin.png"}
          />
        </TabPanel>
        <TabPanel className={classes.tabNames} value={value} index={4}>
          <div>
            <Typography>Release Management Schedule</Typography>
          </div>
          <Calendar onChange={onChange} value={change} />
        </TabPanel>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            AdminPortal
          </Typography>
          <Typography variant="subtitle1" align="center" component="p">
            Made by Jerel Lopez, Seung Jung & Abdul Aamir
          </Typography>
          <Copyright />
        </footer>
      </div>
    </motion.div>
  );
}
