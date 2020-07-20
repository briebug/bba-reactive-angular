import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsListComponent } from './lessons/lessons-list/lessons-list.component';
import { LessonDetailsComponent } from './lessons/lesson-details/lesson-details.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { RoutingModule } from './routing.module';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { CoreStateModule } from '@bba/core-state';
import { CoreDataModule } from '@bba/core-data';
import { MaterialModule } from '@bba/material';
import { UiToolbarModule } from '@bba/ui-toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    LessonsComponent,
    LessonsListComponent,
    LessonDetailsComponent,
    UsersComponent,
    UsersListComponent,
    UserDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    MaterialModule,
    CoreStateModule,
    CoreDataModule,
    UiToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
