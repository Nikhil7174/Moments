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
    color: "rgba(0,183,255, 1)",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
  image: {
    marginLeft: "15px",
    [theme.breakpoints.down("xs")]: {
      width: 40,
      height: 35,
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
  },
  logout: {},
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      margin: "0 40px",
    },
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
