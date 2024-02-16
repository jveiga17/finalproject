import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Brazil from './components/pages/Brazil';
import Covid from './components/pages/Covid';
import Antisemitism from './components/pages/Antisemitism';
import Profile from './components/pages/ProfileFront';
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
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/brazil" element={<Brazil />} />
        <Route exact path="/covid" element={<Covid />} />
        <Route exact path="/antisemitism" element={<Antisemitism />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/brazil-courses" element={<BrazilCourses />} />
        <Route exact path="/antisemitism-courses" element={<AntisemitismCourses />} />
        <Route exact path="/covid-courses" element={<CovidCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
