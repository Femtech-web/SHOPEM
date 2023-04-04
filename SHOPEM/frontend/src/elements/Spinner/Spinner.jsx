import React from "react";
import "./index.css";

 const Spinner = ({ fluid = true }) => (
  <div className={fluid ? "wrapper" : null}>
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  </div>
);

export default Spinner