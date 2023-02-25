import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Introduction from "./Sections/Introduction/Introduction";
import GetApp from "./Sections/GetApp/GetApp";
import Footer from "./Components/Footer/Footer";
import { course, lesson } from "./ConstData/ConstData";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
     if(localStorage.courses && localStorage.lessons){
      const getCourses=JSON.parse(localStorage.getItem("courses"))
       const getLessons= JSON.parse( localStorage.getItem("lessons"))
     }else {
      localStorage.setItem("courses",JSON.stringify(course))
      localStorage.setItem("lessons",JSON.stringify(lesson))
     }
  },[])
  return (
    <>
    <Navbar />
    <div className="App">
      <h1 className="typewriter">Digital learning platform</h1><br/>
      <div className="started">
        <Link to="/courses">
          GET STARTED
          <div className="wave" />
        </Link>
      </div>
      <img
        src={
          "https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=2000"
        }
        className="animated"
        alt="image"
        height="500vh"
      />
    </div>
    <Introduction/>
    <AboutUs />
    <GetApp />
    <Footer />
    </>
  );
}

export default App;
