import React, { useState } from "react";
import classes from "./input.module.css";

const Input = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleLoanFileUpload = () => {
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
    
    } else {
      console.log("No file selected");
    }
  };

  return (
    <div className={classes.input_page}>
      <div className={classes.navbar}>
        <Button text="New Task" />
        <Button text="Load Previous Task" />
        <Button text="Refresh" />
      </div>

      <div className={classes.main}>
        <div className={classes.left_panel}>
          <h3>Input</h3>

          <div className={classes.btnContainer}>
            <PanelButton text={"Type-Retail"} />
            <label className={classes.uploadButton}>
              
              <input type="file" onChange={handleFileChange} />
            </label>
            
            <PanelButton text={"Repayment Schedule"} />
            <PanelButton text={"Interest rate"} />
            <PanelButton text={"Financial Statements"} />
            <PanelButton text={"Macro Data"} />
            <PanelButton text={"Credit Score"} />
          </div>
        </div>

        <div className={classes.right_panel}>
          <h3>Module Inputs</h3>
          <div className={classes.panelContainer}>
            <div className={classes.panel1}>Select Model</div>
            <div className={classes.panel2}>Select PD Model</div>
          </div>
        </div>
      </div>

      <div className={classes.function_panel}>
        <Button text={"Task Name"} />
        <Button text={"Status"} />
        <Button text={"Created By"} />
        <Button text={"Created At"} />
      </div>
    </div>
  );
};

const Button = ({ text }) => {
  return <button className={classes.btn}>{text}</button>;
};

const PanelButton = ({ text }) => {
  return <button className={classes.panelBtn}>{text}</button>;
};

export default Input;
