import React from "react";
import "./BulletList.scss";

const BulletList = (props) => {
  const { punkts, className: classes = "", itemClasses = "" } = props;
  return (
    <ul className={`bulletList ${classes}`}>
      {punkts.map((p) => (
        <li key={p} className={`bulletList__item ${itemClasses}`}>
          {p}
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
