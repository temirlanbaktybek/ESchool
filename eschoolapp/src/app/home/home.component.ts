import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../interface/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'eschoolapp';

  public students?: Student[];
  public deleteStudent!: Student | null;
  public username:string = globalThis.globusername;
  public password:string = globalThis.globpassword;
  constructor(private studentService: StudentService, private router: Router){}
  
  
  ngOnInit(): void {    
    this.getStudents();
  }
  
  public modalClicked(student: Student | null, mode: string): void{
    const container = document.getElementById('profileContainer')
    const button = document.createElement('button')
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal')
    if(mode === 'add'){
      button.setAttribute('data-target', '#addStudentM')
    }
    if(mode === 'update'){
      button.setAttribute('data-target', '#udpateStudentM')
    }
    if(mode === 'delete'){
      this.deleteStudent = student;
      button.setAttribute('data-target', '#deleteStudentM')
    }
    container?.appendChild(button);
    button.click();
  }


  public getStudents(): void{  
    console.log(this.username, this.password, ' FROM GET STUDENTS homecomponent');
    
    this.studentService.getStudents(this.username, this.password).subscribe(
      (response: Student[]) => {
        this.students = response;
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
    );
  }



  public onAddStudent(addForm: NgForm): void {
    document.getElementById('add-student-form')?.click();
    this.studentService.addStudents(addForm.value).subscribe(
      (response: Student) => {
        console.log(response);
        this.getStudents();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onDeleteStudent(studentId: number): void {
    console.log(this.username, this.password, ' FROM delete STUDENTS homecomponent');
    this.studentService.deleteStudents(studentId, this.username, this.password).subscribe(
      (response: void) => {
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        this.getStudents();
      }
    );
  }
}
