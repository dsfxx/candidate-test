import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  uri = 'http://localhost:4000/DC';

  constructor(private http: HttpClient) { }

  addEmployee(employee_fname, employee_lname, employee_phone) {
      const obj = {
        employee_fname: employee_fname,
        employee_lname: employee_lname,
        employee_phone: employee_phone
      };
      this.http.post(`${this.uri}/employeeadd`, obj)
          .subscribe(res => console.log('Done'));
          }
}
