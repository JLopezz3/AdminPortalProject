import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  contentHeader: {
    color: 'white',
  },
  content: {
    color: 'white', 
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
    backgroundPosition: '0px -150px',
    backgroundRepeat: 'no-repeat',
    width: '100wh',
  },
}));

export default function Tech() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
          inkBarStyle={{background: 'black'}}
          centered
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
        >
          <Tab
            style={{ fontWeight: "bold", color: "black" }}
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
      <TabPanel className={classes.tabNames} value={value} index={0}>
        Application Monitoring
      </TabPanel>
      <TabPanel className={classes.tabNames} value={value} index={1}>
        Tech Support
      </TabPanel>
      <TabPanel className={classes.tabNames} value={value} index={2}>
        App Development
      </TabPanel>
      <TabPanel className={classes.tabNames} value={value} index={3}>
        App Admin
      </TabPanel>
      <TabPanel className={classes.tabNames} value={value} index={4}>
        Management
      </TabPanel>
    </div>
  );
}