import React from "react";
import Button from "@mui/material/Button";

const Buttons = (props) => {
  return (
    <div className="button-ylw">
      <Button variant="text"><img src={props.svg} />{props.name}</Button>
    </div>
  );
};

export default Buttons;
