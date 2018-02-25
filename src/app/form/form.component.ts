import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormService } from '..//form.service';
import { IStudents, IStudentsModel } from '../students';
import { ICourseType } from '../course';
import { CoursetypeService } from '..//coursetype.service'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  studentArray: IStudents[] = [];
  courseType: ICourseType[] = [];

  studentM: IStudentsModel
  studentDetail: IStudents

  constructor(private formService: FormService, private coursetypeService: CoursetypeService) { }
     
  ngOnInit() {
    
    this.studentM = {
      firstName: '',
      lastName: '',
      email: '',
      courseType: ''        
    };   

    this.courseType = this.coursetypeService.getCourseType()
  }
  
  addStudents(values) {
    this.studentDetail = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      courseOption: values.courseType
    };
    
    this.formService.addStudents(this.studentDetail)
    
    this.studentArray = this.formService.getStudents()
  }

  resetForm(studentForm) {
    studentForm.reset();    
  }

}
