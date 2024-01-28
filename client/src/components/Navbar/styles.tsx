import { makeStyles } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    // fontSize: 20,
    // background: "-webkit-linear-gradient(45deg, rgba(0,183,255, 1) 30%, rgba(0,183,255, 1) 70%)",
    // WebkitBackgroundClip: "text",
    // WebkitTextFillColor: "transparent",
    color: "rgba(0,183,255, 1) !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: 27,
    },
  },
  image: {
    marginLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      width: 45,
      height: 40,
    },
    [theme.breakpoints.down("xs")]: {
      width: 35,
      height: 30,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "285px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "119px",
    },
  },
  logout: {
    background: "-webkit-linear-gradient(30deg, blue 30%, green 70%)",
    WebkitBackgroundClip: "text",
    color: "rgba(0,183,255, 1)",
    WebkitTextFillColor: "transparent",
    [theme.breakpoints.down("xs")]: {
      width: 76,
      height: 35,
    },
  },
  userName: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  brandContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      margin: "0 0px",
    },
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    [theme.breakpoints.down("xs")]: {
      width: 35,
      height: 35,
    },
  },
}));
