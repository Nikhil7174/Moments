import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
  appBArSearch: {
    borderRadius: 4,
    marginBottom: "1rem",
    display: "fles",
    padding: "16px",
  },
  pagination: {
    borderRadius: 4,
    marginBottom: "1rem",
    padding: "16px",
  },
  searchButton: {
    // background: "-webkit-linear-gradient(45deg, blue 30%, green 70%)",
    // WebkitTextFillColor: "transparent",
    // WebkitBackgroundClip: "text",
    // backgroundColor: "rgba(0,183,255, 1)",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
}));
