import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsJournalCode } from "react-icons/bs";
import style from "./Navbar.module.css";
import { useRecoilValue } from "recoil";
import { adminLoggedin, LoggedinUser } from "../../Recoil/Recoil";

export default function Navbar() {
  const nav = useNavigate();
  const adminLoggedinStatus = useRecoilValue(adminLoggedin);
  const LoggedinUserDetails = useRecoilValue(LoggedinUser);
  function handleLogoRedirect() {
    nav("/home");
  }
  return (
    <div className={style.main}>
      <div className={style.logo} onClick={handleLogoRedirect}>
        <BsJournalCode /> Learn - O - Pedia
      </div>

      <div className={style.options}>
        <Link to="/courses" className={style.link}>
          Courses
        </Link>
        <Link to="/mycourses" className={style.link}>
          My Courses
        </Link>
        {adminLoggedinStatus
          ? <Link to="/addcourse" className={style.link}>
              AddCourse
            </Link>
          : ""}
        <Link to="/register" className={style.link}>
          Register
        </Link>
        <Link to="/" className={style.link}>
          Login
        </Link>
        <img
          src="https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000"
          height="40vh"
          alt="profile"
          style={{
            borderRadius: "10px"
          }}
        />
        <p style={{ color: "white" }}>
          {LoggedinUserDetails.Name}
        </p>
      </div>
    </div>
  );
}
