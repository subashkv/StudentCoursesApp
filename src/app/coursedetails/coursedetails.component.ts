import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  displayedColumns = [ "name", "duration", "fees", "edit" ]
  dataSource : any

  @ViewChild(MatSort, { static : true })
  sort : MatSort

  @ViewChild(MatPaginator, { static : true })
  paginator : MatPaginator

  constructor(private courseService : CourseService, private router : Router) { 
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.courseService.getCourseData('http://localhost:7000/courses').subscribe(data => {
      this.dataSource = new MatTableDataSource(data as any)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    })
  }

  addCourse() {
    this.router.navigate(["addcourse"])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteCourse(id) {
    if(confirm("Are you sure want to delete this course"+id)){
      this.courseService.deleteCourseData('http://localhost:7000/courses/'+id)
      .toPromise().then(
        ()=>{
          this.loadData();
        }
      )
    }
  }

  editCourse(id) {
    this.router.navigate(["/addcourse", id])
  }

}
