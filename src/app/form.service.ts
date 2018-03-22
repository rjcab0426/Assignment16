import { Injectable } from '@angular/core';
import { IStudents } from './students';
import { ICourseType } from './course';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';



@Injectable()
export class FormService {

  students = [];
  baseUrl = 'http://localhost:3000';
  studentsUrl = this.baseUrl + '/form';

  studentList: IStudents[] = []; 

  constructor(private http: HttpClientModule) { }

  addStudents(studentDetail: IStudents) {
    this.studentList.push(studentDetail); 
  }
   
  getStudents(): IStudents [] {
    return this.studentList;
  }

  
}
