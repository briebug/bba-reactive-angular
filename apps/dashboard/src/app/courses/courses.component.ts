import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '@bba/api-interfaces';
import { CoursesService } from '@bba/core-data';
import { CoursesFacade } from '@bba/core-state';

@Component({
  selector: 'bba-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // 01: Queries
  courses$: Observable<Course[]> = this.coursesFacade.allCourses$;
  selectedCourse$: Observable<Course> = this.coursesFacade.selectedCourses$;

  // 00: Update service
  constructor(private coursesFacade: CoursesFacade) {}

  ngOnInit(): void {
    // 04: cleanup
    this.reset();
    this.coursesFacade.mutations$.subscribe((_) => this.reset())
  }

  reset() {
    this.loadCourses();
    this.selectCourse(null);
  }

  // 02: Commands
  selectCourse(course: Course) {
    this.coursesFacade.selectCourse(course);
  }

  loadCourses() {
    this.coursesFacade.loadCourses();
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }

  createCourse(course: Course) {
    this.coursesFacade.createCourse(course);
  }

  updateCourse(course: Course) {
    this.coursesFacade.updateCourse(course);
  }

  deleteCourse(course: Course) {
    this.coursesFacade.deleteCourse(course);
  }
}
