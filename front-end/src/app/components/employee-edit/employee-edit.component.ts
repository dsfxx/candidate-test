import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { AddClient } from '../client-index/AddClient';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

 getemployee: any = {};
 addclients: AddClient[];
 angForm: FormGroup;


  constructor(private employeeservice: EmployeeService,
               private route: ActivatedRoute,
               private router: Router,
               private fb: FormBuilder,
               private clientservice: ClientService) {
                this.createForm();
               }


  createForm() {
        this.angForm = this.fb.group({
               employee_fname: ['', Validators.required ],
               employee_lname: ['', Validators.required ],
               employee_phone: ['', Validators.required ],
               employee_company: ['', Validators.required ]
           });
        }

  updateEmployee(employee_fname, employee_lname, employee_phone, employee_company) {
           this.route.params.subscribe(params => {
              this.employeeservice.updateEmployee(employee_fname, employee_lname, employee_phone, employee_company, params['id']);
              this.router.navigate(['client-index']);
           });
        }



  ngOnInit() {
        this.route.params.subscribe(params => {
          this.employeeservice.editEmployee(params['id']).subscribe(res => {
            this.getemployee = res;
        });
      });

      this.clientservice
              .getClients()
              .subscribe((data: AddClient[]) => {
              this.addclients = data;
          });


    }

}
