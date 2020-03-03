import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {


  educations: string[] = ["MCA", "BCA", "BTech", "MTech", "B.Sc"];
  experienceInMonths: string[] = [];
  passingYears: string[] = [];
  formGroup: FormGroup;
  studentObject = {};
  courses: any;
  id: any;
  student: any;

  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params['id']
      })
    if (this.id!=0){
      this.studentService.getStudentData('http://localhost:7000/students/'+this.id)
      .subscribe((data) => {
        this.student = data;
      })
      this.formGroup = new FormGroup({
        name: new FormControl(this.student.name, [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
        education: new FormControl(this.student.education),
        gender: new FormControl(this.student.gender),
        passyear: new FormControl(this.student.passyear),
        experience: new FormControl(this.student.experience),
        course: new FormControl(this.student.course),
      });
    }
    else{
      this.formGroup = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
        education: new FormControl(''),
        gender: new FormControl(''),
        passyear: new FormControl(''),
        experience: new FormControl(''),
        course: new FormControl(''),
      });
    }
    for (let i = 0; i <= 120; i++)
      this.experienceInMonths.push(i + " Months")
    for (let i = 2000; i < 2020; i++)
      this.passingYears.push(i.toString())
      this.courseService.getCourseData('http://localhost:7000/courses')
      .subscribe((data) => {
        this.courses = data;
      })
  }

  registerStudent() {

    this.studentObject = {
      "name": this.formGroup.value.name,
      "education": this.formGroup.value.education,
      "gender": this.formGroup.value.gender,
      "passyear": this.formGroup.value.passyear,
      "experience": this.formGroup.value.experience,
      "course": this.formGroup.value.course
    }

    this.studentService.addStudentData('http://localhost:7000/students', this.studentObject)
      .subscribe((data) => {
        alert("Student registration Successful!")
        this.router.navigate(["/studentdetails"])
      })

  }

}
