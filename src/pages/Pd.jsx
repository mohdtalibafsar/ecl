import React from "react";
import classes from "./pd.module.css"
const Pd = () => {
  return (

<div className={classes.pd_page}>
      <div className={classes.navbar3}>
        <Button text="Recalculate PD " />
        <Button text="LGD" />
        <Button text="EAD" />
      </div>
      </div>

  );
  };

  const Button = ({ text }) => {
    return <button className={classes.btn3}>{text}</button>;
  };

export default Pd;
