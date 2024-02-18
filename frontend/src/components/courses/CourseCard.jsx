// import React from 'react';
// import styles from '../../css/CourseCard.module.css'

// const CourseCard = ({ course, isSelected, onSelect, onDeselect, buttonText }) => {
//   console.log('CourseCard props:', course, isSelected, buttonText);

//   if (!course) {
//     console.log("CourseCard: Course object is null or undefined")
//     return null; // Return null if course is undefined or null
//   }

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}> 
//         <img className={styles.image} src={course.imageUrl} alt={course.name} />
//         <h3>{course.name}</h3>
//         <p>{course.description}</p>
//         <div className={styles.buttons}>
//         <button>Start Studying!</button>
//           {isSelected ? (
//             <button onClick={onDeselect}>Deselect</button>
//           ) : (
//             <button onClick={onSelect}>{buttonText || "Select"}</button>
//         )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;

import React from 'react';
import styles from '../../css/CourseCard.module.css';

const CourseCard = ({ course, isSelected, onSelect, onDeselect, buttonText }) => {
  console.log('CourseCard props:', course, isSelected, buttonText);

  const handleStartStudying = () => {
    // Check if the course is the specific one you want to handle differently
    if (course.id === 9) {
      // Navigate to the desired destination URL when the "Start Studying" button is clicked
      window.location.href = '/covid-data'; // Replace '/specific-course-url' with the actual URL
    } else {
      // Handle the regular onSelect action for other courses
      onSelect();
    }
  };

  if (!course) {
    console.log("CourseCard: Course object is null or undefined");
    return null; // Return null if course is undefined or null
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}> 
        <img className={styles.image} src={course.imageUrl} alt={course.name} />
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <div className={styles.buttons}>
          <button onClick={handleStartStudying}>Start Studying!</button>
          {isSelected ? (
            <button onClick={onDeselect}>Deselect</button>
          ) : (
            <button onClick={onSelect}>{buttonText || "Select"}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
