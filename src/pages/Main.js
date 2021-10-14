import { toJS } from "mobx";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { fetchCourses } from "../api/api";
import store from "../store/store";
import "./Main.scss";
import Program from "../components/Program/Program";
import Container from "../components/ui/Container/Container";
import Info from "../components/Info/Info";
import BulletList from "../components/ui/BulletList/BulletList";

const Main = observer(() => {
  const courses = toJS(store.courses);

  const actualItems = courses.slice(0, 6);

  useEffect(() => {
    getCourses();
  }, []);

  async function getCourses() {
    const items = await fetchCourses();
    store.setCourses(items);
  }

  return (
    <Container className="main">
      <h1 className="main__title">Специализированные дисциплины</h1>
      <div className="main__programs">
        {actualItems.map((item) => (
          <Program key={item._id} program={item} />
        ))}
      </div>
      <div className="main__infos">
        <Info>
          <h3 className="info__title">Практические модули</h3>
          <p>Работа над собственными проектами: практика групповых взаимодействий, кейс-методы, эссе</p>
        </Info>
        <Info className="info_dark">
          <h3 className="info__title">Итоговая аттестация</h3>
          <BulletList
            punkts={[
              "Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)",
              "Защита итоговой аттестационной работы",
            ]}
          />
        </Info>
      </div>
    </Container>
  );
});

export default Main;
