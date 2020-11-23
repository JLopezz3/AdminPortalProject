import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { db } from "./firebaseSDK";
import Videotwo from "./video/videotwo.mp4";

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
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    margin: "0",
    padding: "0",
    width: "100%",
    zIndex: "-1",
  },
}));

export default function HomePage() {
  const history = useHistory();
  const classes = useStyles();
  const [user, setUser] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    getUid();
  });

  const getUid = async () => {
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
          });
        })
        .catch((e) => alert(e));
    } else {
      history.replace("/login");
    }
  };

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
          {/* <img
            className="home__wallpaper"
            src="https://source.unsplash.com/user/jlopezz3/likes/1600x900"
            alt=""
          /> */}
          <video className={classes.videoTwo} autoPlay loop muted>
            <source src={Videotwo} type="video/mp4" />
          </video>
        </div>
      </div>
    </React.Fragment>
  );
}
