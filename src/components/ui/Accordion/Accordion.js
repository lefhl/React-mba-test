import React, { useState } from "react";
import "./Accordion.scss";
import moreIcon from "../../../assets/images/icons/more.svg";
import lessIcon from "../../../assets/images/icons/less.svg";

const AccordionButton = (props) => {
  const { children, setIsAccordionActive, isAccordionActive, ...rest } = props;
  return (
    <button
      className={`accordion__title ${isAccordionActive ? " accordion__title_active" : ""}`}
      type="button"
      onClick={() => setIsAccordionActive(!isAccordionActive)}
      {...rest}
    >
      <img src={isAccordionActive ? lessIcon : moreIcon} alt="" />
      {children}
    </button>
  );
};

const AccordionBody = (props) => {
  const { children, isAccordionActive, ...rest } = props;
  return (
    <>
      {isAccordionActive && (
        <div className="accordion__body" {...rest}>
          {children}
        </div>
      )}
    </>
  );
};

const Accordion = (props) => {
  const { children } = props;
  const [isAccordionActive, setIsAccordionActive] = useState(false);
  return (
    <div className="accordion">
      {React.cloneElement(children[0], { setIsAccordionActive, isAccordionActive })}
      {React.cloneElement(children[1], { isAccordionActive })}
    </div>
  );
};

Accordion.Button = AccordionButton;
Accordion.Body = AccordionBody;

export default Accordion;
