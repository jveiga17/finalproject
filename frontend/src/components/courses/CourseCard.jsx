import React from 'react';

const CourseCard = ({ course, isSelected, onSelect, onDeselect, buttonText }) => {
  console.log('CourseCard props:', course, isSelected, buttonText);

  if (!course) {
    console.log("CourseCard: Course object is null or undefined")
    return null; // Return null if course is undefined or null
  }

  return (
    <div>
      <img src={course.imageUrl} alt={course.name} />
      <h3>{course.name}</h3>
      <p>{course.description}</p>
      {isSelected ? (
        <button onClick={onDeselect}>Deselect</button>
      ) : (
        <button onClick={onSelect}>{buttonText || "Select"}</button>
      )}
    </div>
  );
};

export default CourseCard;

