import React from "react";
import "./Container.scss";

const Container = (props) => {
  const { children, className: classes } = props;
  return <div className={`container ${classes ? classes : ""}`}>{children}</div>;
};

export default Container;
