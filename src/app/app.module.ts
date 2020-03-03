import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { CourseService } from './course.service';
import { AddcourseComponent } from './addcourse/addcourse.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentregistrationComponent,
    HeaderComponent,
    NavComponent,
    StudentdetailsComponent,
    CoursedetailsComponent,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,  
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [StudentService,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
