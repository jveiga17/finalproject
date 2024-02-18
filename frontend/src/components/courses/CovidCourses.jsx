import React from 'react';
import CourseCard from './CourseCard';

const CovidCourses = () => {
  // Array of mock data for Brazil courses
  const brazilCourses = [
    { id: 1, name: 'Global Economic Consequences of COVID-19', description: 'Analysis of the macroeconomic effects of the pandemic', imageUrl: '/images/covid1.jpg' },
    { id: 2, name: 'Sectoral Impacts and Disruptions', description: 'Study of the differential impacts of the pandemic on various sectors of the economy', imageUrl: '/images/covid3.webp' },
    { id: 3, name: 'Healthcare Innovations and Scientific Advancements', description: 'Examination of the role of technology, data science, and artificial intelligence in pandemic response and preparedness', imageUrl: '/images/covid2.jpg' },
    { id: 4, name: 'Social and Cultural Impacts of the Pandemic', description: 'Study of the social and cultural dimensions of the COVID-19 pandemic', imageUrl: '/images/covid4.jpg' },
    
  ];


  return (
    <div>
      <h2>Covid Courses</h2>
      <div className="course-card-container">
        {brazilCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CovidCourses;
