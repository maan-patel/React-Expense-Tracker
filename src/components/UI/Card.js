import "./Card.css";
import React from "react"; //not needed but it is being added BTS

const Card = (props) => {
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
