import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddClientService {

  uri = 'http://localhost:4000/DC';

  constructor(private http: HttpClient) { }

  addClient(client_name, client_detail) {
    const obj = {
      client_name: client_name,
      client_detail: client_detail
    };
    this.http.post(`${this.uri}/clientadd`, obj)
        .subscribe(res => console.log('Done'));
        }

  getAddClients() {
      return this
             .http
             .get(`${this.uri}/`);
      }

  editAddClient(id) {
    return this
              .http
              .get(`${this.uri}/clientedit/${id}`);
    }

  updateAddClient(client_name, client_detail, id) {
    const obj = {
      client_name: client_name,
      client_detail: client_detail
    };
    this
      .http
      .post(`${this.uri}/clientupdate/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteAddClient(id) {
      return this
                .http
                .get(`${this.uri}/clientdelete/${id}`);
  }


}
