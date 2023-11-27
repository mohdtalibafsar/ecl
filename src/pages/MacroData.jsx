import React from "react";
import classes from "./MacroData.module.css";
const MacroData = () => {
  return (

<div className={classes.MacroData_page}>
      <div className={classes.navbar2}>
        <Button text="Economic Indicators" />
        <Button text="Financial Metric" />
        <Button text="Portfolio Distribution" />
      </div>
      </div>

  );
  };

  const Button = ({ text }) => {
    return <button className={classes.btn2}>{text}</button>;
  };

export default MacroData;