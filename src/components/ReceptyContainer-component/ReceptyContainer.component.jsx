import React from "react";
import "./recepty-styles.css";

function ReceptyContainer(props) {
  return <section className="recepty-container">{props.children}</section>;
}

export default ReceptyContainer;
