import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function ButtonComponent() {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
    </div>
  );
}