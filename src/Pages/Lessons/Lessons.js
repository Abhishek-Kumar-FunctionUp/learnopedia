import React, { useState } from "react";
import { lesson } from "../../ConstData/ConstData";
import ReactPlayer from "react-player";
import Style from "./Lessons.module.css";
import Navbar from "../../Components/Navbar/Navbar";

export default function Lessons() {
  const lessonData = JSON.parse(localStorage.getItem("dynamicLesson"));
  console.log(lessonData, "i m lessonData");
  console.log(lesson, "i m lesson");
  const renderData = lesson.filter(x => x.id === lessonData.id);
  console.log(renderData);
  const [data, setData] = useState(renderData);

  function handleVideo(x) {
    console.log(x);
    if (!x.isShown) {
      x.isShown = true;
    } else {
      x.isShown = false;
    }
    setData([...data]);
  }
  return (
    <div className={Style.main}>
    <Navbar />
      <h1>Chapters</h1>
      <div className={Style.frame}>
      {data.map(x =>
        <>
          <p
            onClick={() => {
              handleVideo(x);
            }}
          >
            {x.lession}: {x.title}
          </p>
          {x.isShown
            ? <div className={Style.video}>
                <ReactPlayer
                  url={x.video}
                  width="50vw"
                  height="60vh"
                  controls={true}
                />{" "}
                {x.title}
              </div>
            : " "}
            </>
      )}
      </div>
    </div>
  );
}
