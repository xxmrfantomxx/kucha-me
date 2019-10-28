import React from "react";
import "./uvod-styles.css";
import majitelka from "../../images/majitelka.jpeg";

function Uvod({ name, content }) {
  return (
    <section className="main-container-uvod">
      <h1 className="title-uvod">{name}</h1>
      <div className="container"></div>
      <div className="uvod-content">
        <div className="img">
          <img src={majitelka} alt="majitelka" />
        </div>
        <p className="text-container">{content}</p>
      </div>
    </section>
  );
}

export default Uvod;
