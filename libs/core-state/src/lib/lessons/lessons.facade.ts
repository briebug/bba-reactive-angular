import { Injectable } from '@angular/core';
import { Lesson } from '@bba/api-interfaces';
import { LessonsService } from '@bba/core-data';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import * as fromLessons from './lessons.reducer';

import * as LessonsActions from './lessons.actions';
import * as LessonsSelectors from './lessons.selectors';

@Injectable({
  providedIn: 'root',
})
export class LessonsFacade {
  private selectedLesson = new Subject<Lesson>();
  private mutations = new Subject();

  selectedLessons$ = this.selectedLesson.asObservable();
  mutations$ = this.mutations.asObservable();
  allLessons$ = this.store.pipe(
    select('lessons'),
    map((state) => state.entities),
    map((state) => Object.keys(state).map(k => state[k]))
  );

  constructor(
    private lessonsService: LessonsService,
    private store: Store<fromLessons.LessonsPartialState>
  ) {}

  reset() {
    this.mutations.next(true);
  }

  selectLesson(lesson: Lesson) {
    this.selectedLesson.next(lesson); // temporary
    this.dispatch(LessonsActions.selectLesson({ selectedId: lesson?.id }));
  }

  loadLessons() {
    this.lessonsService
      .all()
      .subscribe((lessons: Lesson[]) =>
        this.dispatch(LessonsActions.loadLessons({ lessons }))
      );
  }

  saveLesson(lesson: Lesson) {
    if (lesson.id) {
      this.updateLesson(lesson);
    } else {
      this.createLesson(lesson);
    }
  }

  createLesson(lesson: Lesson) {
    this.dispatch(LessonsActions.createLesson({ lesson }));
  }

  updateLesson(lesson: Lesson) {
    this.dispatch(LessonsActions.updateLesson({ lesson }));
  }

  deleteLesson(lesson: Lesson) {
    this.dispatch(LessonsActions.deleteLesson({ lesson }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
