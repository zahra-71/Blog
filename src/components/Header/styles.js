import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
    toolbarHeader: {
      borderBottom: 1,
    },
    search: {
      marginRight: 7,
      position: "relative",
      width: "20ch",
    },
    searchIcon: {
      width: 36,
      display: "flex",
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      left: 0,
      height: "100%",
      padding: 8,
      zIndex: 1,
      cursor: "pointer"
    },
    headerIcon: {
        fontSize: 28,
        color: "#ced4da",
    },
    inputRoot: {
      width: "100%",
      margin: 0,
      height: 37,
      backgroundColor: "white",
      borderRadius: 5,
      border: '1px solid #ced4da',
      '&:hover': {
        // backgroundColor: "#DBDFFD"
      }
    },
    inputFocused: {
      backgroundColor: "#DBDFFD",
    },
    inputInput: {
      height: 36,
      paddingRight: 20,
      width: "100%",
    },
}))