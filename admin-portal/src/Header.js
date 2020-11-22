import React, { useEffect, useState } from "react";
import { db } from "./firebaseSDK";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ReceiptIcon from "@material-ui/icons/Receipt";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#000000",
    opacity: "0.9",
    display: "flex",
  },
  greeting: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
  },
  finance: {
    objectFit: "contain",
    marginRight: theme.spacing(1),
    color: "rgb(211, 168, 38)",
  },
  hr: {
    objectFit: "contain",
    marginRight: theme.spacing(1),
    color: "rgb(211, 168, 38)",
  },
  sales: {
    objectFit: "contain",
    marginRight: theme.spacing(1),
    color: "rgb(211, 168, 38)",
  },
  tech: {
    objectFit: "contain",
    marginRight: theme.spacing(1),
    color: "rgb(211, 168, 38)",
  },
  support: {
    objectFit: "contain",
    marginRight: theme.spacing(1),
    color: "rgb(211, 168, 38)",
  },
  title: {
    color: "lightgray",
    flexGrow: 1,
  },
  links: {
    textDecoration: "none",
    color: "inherit",
  },
  icons: {
    paddingBottom: "5px",
  }
}));

export default function Header() {
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  useEffect(async () => {
    let uid = await localStorage.getItem("uid");
    if (uid !== null) {
      setUser(true);
      db.collection("users")
        .where("uid", "==", uid)
        .get()
        .then((doc) => {
          doc.forEach((item) => {
            console.log(item.id);
            setName(item.data().name);
            setEmail(item.data().email);
            setPosition(item.data().user);
          });
        })
        .catch((e) => alert(e));
    } else {
      history.replace("/login");
    }
  });

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar variant="dense">
          <Typography className={classes.title} variant="h6">
            <Link to="/" className={classes.links}>
              AdminPortal
            </Link>
          </Typography>
          <Typography className={classes.greeting}>
            You are logged in as: 
          </Typography>
          {position === "finance" && (
            <Link to="/finance" className={classes.links}>
              <Button size="small" color="inherit" className={classes.finance}>
              <MonetizationOnIcon className={classes.icons} />
                Finance
              </Button>
            </Link>
          )}
          {position === "hr" && (
            <Link to="/hr" className={classes.links}>
              <Button size="small" color="inherit" className={classes.hr}>
              <SupervisorAccountIcon className={classes.icons} />
                HR
              </Button>
            </Link>
          )}
          {position === "sales" && (
            <Link to="/sales" className={classes.links}>
              <Button size="small" color="inherit" className={classes.sales}>
              <ReceiptIcon className={classes.icons}/>
                Sales
              </Button>
            </Link>
          )}
          {position === "tech" && (
            <Link to="/tech" className={classes.links}>
              <Button size="small" color="inherit" className={classes.tech}>
              <LaptopChromebookIcon className={classes.icons}/>
                Tech
              </Button>
            </Link>
          )}
          {position === "support" && (
            <Link to="/support" className={classes.links}>
              <Button size="small" color="inherit" className={classes.support}>
              <LiveHelpIcon className={classes.icons}/>
                Support
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
