import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useRecoilValue } from "recoil";
import { myCourse } from "../../Recoil/Recoil";
import { useNavigate } from "react-router-dom";
import style from "./MyCourses.module.css";

export default function MyCourses() {
  const recoiledData = useRecoilValue(myCourse);
  const nav = useNavigate();

  function handleLesson(e) {
    console.log(e);
    localStorage.setItem("dynamicLesson", JSON.stringify(e));
    nav("/lessons");
  }
  return (
    <div className={style.background}>
      <Navbar />
      <div className={style.courseCard}>
        {recoiledData.map(e =>
          <div
            key={e.id}
            className={style.swing}
            onClick={() => handleLesson(e)}
          >
            <img
              src={e.thumbnail}
              className={style.thumbnail}
              height="60%"
              width="90%"
              alt="thumbnail"
            />
            <h5>
              {e.name}
            </h5>
            <p>
              {e.author}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
