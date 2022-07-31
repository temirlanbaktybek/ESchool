import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
declare global {
  var globusername:string;
  var globpassword:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public password!: string;
  public username!: string;
  
  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  doLogin(){
    let res = this.service.login(this.username, this.password);
    globalThis.globusername = this.username;
    globalThis.globpassword = this.password;
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    res.subscribe(data => {
      this.router.navigate(['/student/all'])
    })
  }

}