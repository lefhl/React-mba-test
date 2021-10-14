import React from "react";
import "./Info.scss";

const Info = (props) => {
  const { children, className: classes } = props;
  return <div className={`info ${classes ? classes : ""}`}>{children}</div>;
};

export default Info;
