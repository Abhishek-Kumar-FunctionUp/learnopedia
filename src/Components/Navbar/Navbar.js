import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../Atom/SearchBar/SearchBar";
import { BsJournalCode } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import style from "./Navbar.module.css";

export default function Navbar() {
  const nav = useNavigate();

  function handleLogoRedirect() {
    nav("/");
  }
  return (
    <div className={style.main}>
      <div className={style.logo} onClick={handleLogoRedirect}>
        <BsJournalCode /> Learn-O-Pedia
      </div>
      <div className={style.search}>
        <SearchBar placeholder="Search" className={style.searchbar} />
        <AiOutlineSearch />
      </div>
      <div className={style.options}>
        <Link to="/courses">Courses</Link>
        <Link to="/mycourses">My Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
