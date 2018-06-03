import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ListEmployee } from './Employee';
import { EmployeeService } from '../../employee.service';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.css']
})


export class EmployeeIndexComponent implements OnInit {

  listemployee: ListEmployee[];


  constructor( private employeeservice: EmployeeService,
                private route: ActivatedRoute,
                private router: Router) { }


  employeedelete(id, index) {
         this.employeeservice.employeedelete(id).subscribe(res => {
           console.log('Deleted')
           this.listemployee.splice(index, 1)
         });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
    this.employeeservice
            .getCompanyEmployee(params['id'])
            .subscribe((data: ListEmployee[]) => {
            this.listemployee = data;
          });
    });
  }




}
