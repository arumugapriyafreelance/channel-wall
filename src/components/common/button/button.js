import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import './style.css';


export default function ButtonComponent(props) {
  return (
    <div className="button-wrapper">
      <Button 
      variant="contained" 
      color="primary"
      type={props.type}
      className="primary-btn">
        {props.value}
      </Button>
    </div>
  );
}
