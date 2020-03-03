import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { AddcourseComponent } from './addcourse/addcourse.component';


const routes: Routes = [
  { path: "", redirectTo: '/studentdashboard', pathMatch: "full"},
  { path: 'studentdashboard', component: StudentdetailsComponent },
  { path: 'coursedashboard', component: CoursedetailsComponent },
  { path: 'addcourse', component: AddcourseComponent },
  { path: 'registration/:id', component: StudentregistrationComponent }
  //{ path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
