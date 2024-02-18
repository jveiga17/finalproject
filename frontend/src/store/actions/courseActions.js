// frontend/src/store/actions/courseActions.js

import { SELECT_COURSE, DESELECT_COURSE } from './actionTypes';

export const selectCourse = (courseId) => ({
  type: SELECT_COURSE,
  payload: courseId,
});

export const deselectCourse = (courseId) => ({
  type: DESELECT_COURSE,
  payload: courseId,
});
