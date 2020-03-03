import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  displayedColumns = [ "name", "education", "gender", "passyear", "experience", "course", "edit" ]
  dataSource : any

  @ViewChild(MatSort, { static : true })
  sort : MatSort

  @ViewChild(MatPaginator, { static : true })
  paginator : MatPaginator

  constructor(
    private studentService : StudentService,
    private router : Router
    ) { }

    ngOnInit(): void {
      this.loadData();
    }

  loadData() {
    this.studentService.getStudentData('http://localhost:7000/students')
    .subscribe((data) => {
      this.dataSource = new MatTableDataSource(data as any)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    })
  }

  addStudent() {
    this.router.navigate(["registration"])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteStudent(id) {
    if(confirm("Are you sure want to delete this student")){
      this.studentService.deleteStudentData('http://localhost:7000/students/'+id)
      .toPromise().then(
        ()=>{
          this.loadData();
        }
      )
    }
  }

  editStudent(id) {
    this.router.navigate(["/registration", id])
  }

}
