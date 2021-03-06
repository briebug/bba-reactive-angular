import { Course } from '@bba/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { COURSES_FEATURE_KEY, coursesAdapter, CoursesState } from './courses.reducer';

// Lookup the 'Courses' feature state managed by NgRx
export const getCoursesState = createFeatureSelector<
  CoursesState
>(COURSES_FEATURE_KEY);

const { selectAll, selectEntities } = coursesAdapter.getSelectors();

export const getCoursesLoaded = createSelector(
  getCoursesState,
  (state: CoursesState) => state.loaded
);

export const getCoursesError = createSelector(
  getCoursesState,
  (state: CoursesState) => state.error
);

export const getAllCourses = createSelector(
  getCoursesState,
  (state: CoursesState) => selectAll(state)
);

export const getCoursesEntities = createSelector(
  getCoursesState,
  (state: CoursesState) => selectEntities(state)
);

export const getSelectedCourseId = createSelector(
  getCoursesState,
  (state: CoursesState) => state.selectedId
);

export const getSelectedCourse = createSelector(
  getCoursesEntities,
  getSelectedCourseId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
