import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Brazil from './components/pages/Brazil';
import Covid from './components/pages/Covid';
import Antisemitism from './components/pages/Antisemitism';
import Profile from './components/pages/Profile';
import Login from './components/auth/LoginFront';
import Register from './components/auth/RegisterFront';
import Courses from './components/courses/CoursesFront';
import BrazilCourses from './components/courses/BrazilCourses';
import AntisemitismCourses from './components/courses/AntisemitismCourses';
import CovidCourses from './components/courses/CovidCourses';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/brazil" element={<Brazil />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/antisemitism" element={<Antisemitism />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/brazil-courses" element={<BrazilCourses />} />
        <Route path="/antisemitism-courses" element={<AntisemitismCourses />} />
        <Route path="/covid-courses" element={<CovidCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
