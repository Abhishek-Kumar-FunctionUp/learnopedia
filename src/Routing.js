import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import AddCourse from './Pages/AddCourse/AddCourse'
import Courses from './Pages/Courses/Courses'
import Dashboard from './Pages/DashBoard/Dashboard'
import Lessons from './Pages/Lessons/Lessons'
import MyCourses from './Pages/MyCourses/MyCourses'

export default function Routing(){
  return(
    <>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/mycourses' element={<MyCourses/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/lessons' element={<Lessons/>}/>
      <Route path='/addcourse' element={<AddCourse/>}/>
    </Routes>
    </>
  ) 
}

