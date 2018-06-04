import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  uri = 'http://localhost:4000/DC';

  constructor(private http: HttpClient,
              private router: Router) { }

  //Adds a new client
  addClient(client_name, client_detail) {
    const obj = {
      client_name: client_name,
      client_detail: client_detail
    };
    this.http.post(`${this.uri}/clientadd`, obj)
        .subscribe(res => console.log('Done'));
        }

  //Gets a list of all clients
  getClients() {
      return this
             .http
             .get(`${this.uri}/`);
      }

  //Gets a client by ID
  editClient(id) {
    return this
              .http
              .get(`${this.uri}/clientedit/${id}`);
    }

  //updates a client
  updateClient(client_name, client_detail, id) {
    const obj = {
      client_name: client_name,
      client_detail: client_detail
    };
    this
      .http
      .post(`${this.uri}/clientupdate/${id}`, obj)
      .subscribe(res => this.router.navigate(['client-index']));
  }

  //deletes a client
  deleteClient(id) {
      return this
                .http
                .get(`${this.uri}/clientdelete/${id}`);
  }


}
