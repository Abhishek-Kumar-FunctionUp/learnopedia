import React from "react";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import Navbar from "../../Components/Navbar/Navbar";
import { course } from "../../ConstData/ConstData";
import { useNavigate } from "react-router-dom";
import style from "./Courses.module.css";
import Footer from "../../Components/Footer/Footer";
import { useRecoilState } from "recoil";
import { myCourse } from "../../Recoil/Recoil";
export default function Courses() {
  const nav = useNavigate();
  const [myData, setMyData] = useRecoilState(myCourse);

  function handleLesson(e) {
    console.log(e);
    localStorage.setItem("dynamicLesson", JSON.stringify(e));
    nav("/lessons");
  }
  function handleSave(e) {
    console.log(e);
    setMyData([e, ...myData]);
  }

  return (
    <div className={style.background}>
      <div className={style.main}>
        <Navbar />
        <h1 className={style.title}>Courses</h1>
        <div className={style.courseCard}>
          {course.map(e =>
            <div key={e.id} className={style.swing}>
              <img
                src={e.thumbnail}
                className={style.thumbnail}
                height="60%"
                width="90%"
                alt="thumbnail"
              />
              <h5 onClick={() => handleLesson(e)}>
                {e.name}
              </h5>
              <p>
                {e.author}
              </p>
              <CustomButton
                text="Save For Later"
                onClick={() => handleSave(e)}
                className={style.btn}
              />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}
