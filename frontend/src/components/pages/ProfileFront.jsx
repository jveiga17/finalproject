
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NavbarUser from '../scripts/NavbarUser';
import styles from '../../css/Profile.module.css';
import CourseCard from '../courses/CourseCard';
import { deselectCourse } from '../../store/actions/courseActions';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);
  const myCourses = useSelector(state => {
  
    const selectedCourses = state.courses.selectedCourses;

    return state.courses.list.filter(course => {
      return selectedCourses.includes(course.id)
    }) 
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
        return navigate('/login')
    }
  }, [user, navigate])

  const capitalizedUsername = user?.username.charAt(0).toUpperCase() + user?.username.slice(1);

  const handleDeselect = (courseId) => {
    dispatch(deselectCourse(courseId));
  };

  return (
    <div>
      <NavbarUser />
      <h1 className={styles.h1Intro}>Welcome, {capitalizedUsername}!</h1>
      {/* Render other profile information here */}
      <h2>Your Selected Courses:</h2>
      <div className="course-card-container">
        {myCourses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course} 
            isSelected={true}
            buttonText="Start"
            onDeselect={() => handleDeselect(course.id)} // Pass the handleDeselect function
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
