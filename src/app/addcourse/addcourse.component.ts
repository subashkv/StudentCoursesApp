import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {

  formGroup: FormGroup;
  courseObject = {};
  courses: any;
  durationInMonths: string[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name : new FormControl('', [Validators.required]),
      duration : new FormControl('', [Validators.required]),
      fee : new FormControl('', [Validators.required, Validators.pattern('^[0-9.]+$')])
    })
    for (let i = 0; i <= 12; i++)
    this.durationInMonths.push(i + " Months")
  }

  addCourse() {

    this.courseObject = {
      "name": this.formGroup.value.name,
      "duration": this.formGroup.value.duration,
      "fee": this.formGroup.value.fee
    }

    this.courseService.addCourseData('http://localhost:7000/courses', this.courseObject)
      .subscribe((data) => {
        alert("Course added Successfuly!")
        this.router.navigate(["/coursedashboard"])
      })

  }

}
