import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from '../interface/student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerURL: string = environment.apiURL;

  constructor(private http: HttpClient) { }


  public login(username: string, password : string){
    const headers = new HttpHeaders( {Authorization: 'Basic '+btoa(username+":"+password)} )
    console.log(headers, " FROM STUDENTSERVISE TS LOGIN METHOD");
    
    return this.http.get(`${this.apiServerURL}/student`, {headers, responseType: 'text' as 'json'});
  }
  
  public getStudents(username: string, password:string): Observable<Student[]> {    
    const headers = new HttpHeaders( {Authorization: 'Basic '+btoa(username+":"+password)} )
    return this.http.get<Student[]>(`${this.apiServerURL}/student/all`, {headers})
  }

  public addStudents(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.apiServerURL}/student/add`, student);
  }

  public deleteStudents(studentId: number, username: string, password : string): Observable<void> {
    const headers = new HttpHeaders( {Authorization: 'Basic '+btoa(username+":"+password)} )
    return this.http.delete<void>(`${this.apiServerURL}/student/delete/${studentId}`, {headers});
  }
  
  public updateStudents(student: Student, username: string, password : string): Observable<Student> {
    const headers = new HttpHeaders( {Authorization: 'Basic '+btoa(username+":"+password)} )
    return this.http.put<Student>(`${this.apiServerURL}/student/update`, {student, headers})
  }

}
