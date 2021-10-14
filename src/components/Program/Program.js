import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Accordion from "../ui/Accordion/Accordion";
import BulletList from "../ui/BulletList/BulletList";
import "./Program.scss";

const Program = (props) => {
  const { title, specializedSubjects: subj } = props.program;
  const modules = [subj.slice(0, 5), subj.slice(6, -1)];

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="program">
      <h3 className="program__title">{title}</h3>
      <div className="program__modules">
        <div className="program__module">
          {isMobile ? (
            <Accordion>
              <Accordion.Button>1 Модуль</Accordion.Button>
              <Accordion.Body>
                <BulletList punkts={modules[0]} />
              </Accordion.Body>
            </Accordion>
          ) : (
            <>
              <h5 className="program__subtitle">Модуль 1</h5>
              <BulletList punkts={modules[0]} />
            </>
          )}
        </div>

        {modules[1].length > 0 ? (
          !isMobile ? (
            <div className="program__module">
              <h5 className="program__subtitle">Модуль 2</h5>
              <BulletList punkts={modules[1]} />
            </div>
          ) : (
            <Accordion>
              <Accordion.Button>2 Модуль</Accordion.Button>
              <Accordion.Body>
                <BulletList punkts={modules[1]} />
              </Accordion.Body>
            </Accordion>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Program;
