import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:4000/DC';

  constructor(private http: HttpClient) { }

  //adds new employee
  addEmployee(employee_fname, employee_lname, employee_phone, employee_company) {
      const obj = {
        employee_fname: employee_fname,
        employee_lname: employee_lname,
        employee_phone: employee_phone,
        employee_company: employee_company
      };

      this.http.post(`${this.uri}/employeeadd`, obj)
          .subscribe(res => console.log('Done'));
  }

  //gets employees that belong to a specific company.  Uses company ID
  getCompanyEmployee(id) {
        return this
               .http
               .get(`${this.uri}/getCompanyEmployee/${id}`);
        }

  //Gets an employee by id
  editEmployee(id) {
      return this
                .http
                .get(`${this.uri}/employeeEdit/${id}`);
      }

  // updates an employee
  updateEmployee(employee_fname, employee_lname, employee_phone, employee_company, id) {
       const obj = {
         employee_fname: employee_fname,
         employee_lname: employee_lname,
         employee_phone: employee_phone,
         employee_company: employee_company
       };
       this
         .http
         .post(`${this.uri}/employeeupdate/${id}`, obj)
         .subscribe(res => console.log('Done'));
     }

  // delets an employee by id
  employeedelete(id) {
        return this
                  .http
                  .get(`${this.uri}/employeedelete/${id}`);
    }
}
