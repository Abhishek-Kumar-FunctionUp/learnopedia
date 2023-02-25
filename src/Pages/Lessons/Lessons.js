import React, { useEffect, useState } from "react";
import { MdOndemandVideo } from "react-icons/md";
import { AiOutlineBars } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Style from "./Lessons.module.css";

export default function Lessons() {
  const [render, setRender] = useState([]);
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState("");

  useEffect(() => {
    const lessonData = JSON.parse(localStorage.getItem("dynamicLesson"));
    const getsLessons = JSON.parse(localStorage.getItem("lessons"));
    console.log(lessonData, "i m lessonData");
    console.log(getsLessons, "hjdhhjh");
    const renderData = getsLessons.filter(x => x.id === lessonData.id);
    setRender(renderData);
    console.log(renderData, "iiiiiiiii");
  }, []);

  function handleVideo(x) {
    console.log(x.video);
    setVideo(x);
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  return (
    <div className={Style.main}>
      <div className={Style.frame}>
        <div style={{ height: "10vh" }} />
        <div className={Style.header}>
          <h6>
            <Link to="/courses">
              <BiArrowBack />
            </Link>{" "}
            Back to courses
          </h6>
        </div>
        <p>Course Discussions</p>
        <h6>
          {" "}<AiOutlineBars /> Contents
        </h6>
        {render.map(x =>
          <div>
            <div
              onClick={() => {
                handleVideo(x);
              }}
            >
              <div className={Style.content}>
                <MdOndemandVideo /> {x.title}
              </div>
            </div>
          </div>
        )}
        {show
          ? <div className={Style.video}>
              <h4>
                <u>
                  {video.title}
                </u>
              </h4>
              <ReactPlayer
                url={video.video}
                width="45vw"
                height="60vh"
                controls={true}
                className={Style.player}
              />{" "}
              <p>{video.details}</p>
            </div>
          : " "}
      </div>
    </div>
  );
}
