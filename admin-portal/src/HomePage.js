import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { db } from "./firebaseSDK";
import Videoone from "./video/videoone.mp4.mp4";
import Videotwo from "./video/videotwo.mp4";


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

const useStyles = makeStyles((theme) => ({
  login: {
    display: "flex",
    justifyContent: "center",
  },
  loginButton: {
    background: "#000000",
    opacity: "0.9",
    color: "white",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#FFFFFF",
      backgroundColor: "rgb(176 113 41)",
    },
  },
  videoTwo: {
    position: "bottom",
    width: "100%",
    margin: "0px auto",
    overflow: "hidden",
  },
  footer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    background: "#000000",
    color: "#FFFFFF",
    opacity: "0.9",
    margin: "0px",
    display: "block",
  },
}));

export default function HomePage() {
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
        doc.forEach(item => {
          console.log(item.id);
          setName(item.data().name)
          setEmail(item.data().email)
          setPosition(item.data().user)
        })
        })
        .catch((e) => alert(e));
    } else {
      history.replace("/login");
    }
  });
  const logout = () => {
    localStorage.removeItem("uid");
    history.replace("/login");
  };
  return (
    <React.Fragment>
      <div className="home">
        <div className="home__container">
          <Typography
            className="title"
            variant="h2"
            component="h2"
            gutterBottom
          >
            Welcome {name} to AdminPortal!
          </Typography>
          {user === true ? (
            <div className={classes.login}>
              <Button
                className={classes.loginButton}
                variant="contained"
                onClick={logout}
              >
                logout
              </Button>
            </div>
          ) : (
            <div className={classes.login}>
              <Link to="/login">
                <Button className={classes.loginButton} variant="contained">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className={classes.loginButton} variant="contained">
                  signup
                </Button>
              </Link>
            </div>
          )}
          <img
            className="home__wallpaper"
            src="https://source.unsplash.com/user/jlopezz3/likes/1600x900"
            alt=""
          />
          {/* <video
            className={classes.videoTwo}
            autoPlay
            loop
            muted
          >
            <source src={Videoone} type="video/mp4"/>
          </video> */}
          <video
            className={classes.videoTwo}
            autoPlay
            loop
            muted
          >
            <source src={Videotwo} type="video/mp4"/>
          </video>
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
        {/* Footer */}
        
        {/* End footer */}
      </div>
    </React.Fragment>
  );
}
