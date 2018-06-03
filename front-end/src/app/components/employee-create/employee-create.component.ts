import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  @ViewChild('myForm') public createEmployeeForm: NgForm;
  angForm: FormGroup;

 constructor(private employeeservice: EmployeeService,
              private fb: FormBuilder,
              private router: Router) {
    this.createForm();
  }

    createForm() {
      this.angForm = this.fb.group({
        employee_fname: ['', Validators.required ],
        employee_lname: ['', Validators.required ],
        employee_phone: ['', Validators.required ]
     });
    }

    addEmployee(employee_fname, employee_lname, employee_phone) {
        this.employeeservice.addEmployee(employee_fname, employee_lname, employee_phone);
        this.createEmployeeForm.reset();
    }

  ngOnInit() {
  }

}
