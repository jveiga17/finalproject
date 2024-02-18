// BrazilCourses.jsx
import React from 'react';
import CourseCard from './CourseCard';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks
import { selectCourse, deselectCourse } from '../../store/actions/courseActions'; // Import selectCourse and deselectCourse actions

const BrazilCourses = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const selectedCourses = useSelector(state => state.courses.selectedCourses); // Get selected courses from the Redux store
  const brazilCourses = useSelector(state => state.courses.list.filter(course => course.branch === 'brazil')) //******************* */

  // Handle select course action
  const handleSelectCourse = (courseId) => {
    dispatch(selectCourse(courseId)); // Dispatch selectCourse action with courseId
  };

  // Handle deselect course action
  const handleDeselectCourse = (courseId) => {
    dispatch(deselectCourse(courseId)); // Dispatch deselectCourse action with courseId
  };

  return (
    <div>
      <h2>Brazil Courses</h2>
      <div className="course-card-container">
        {brazilCourses.map(course => (
          <CourseCard
            key={course.id}
            course={course}
            isSelected={selectedCourses.includes(course.id)} // Check if course is selected
            onSelect={() => handleSelectCourse(course.id)} // Pass handleSelectCourse function as prop
            onDeselect={() => handleDeselectCourse(course.id)} // Pass handleDeselectCourse function as prop
          />
        ))}
      </div>
    </div>
  );
};

export default BrazilCourses;
