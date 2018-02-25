import { Component, OnInit, Input } from '@angular/core';
import { IStudents } from '../students';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  @Input() studentDetail;

  studentList: IStudents;

  constructor() { }

  ngOnInit() {
  }

}
