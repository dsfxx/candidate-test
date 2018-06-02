import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddClientService {

  uri = 'http://localhost:4000/test';

  constructor(private http: HttpClient) { }

  addClient(client_name, client_detail) {
    const obj = {
      client_name: client_name,
      client_detail: client_detail
    };
    this.http.post(`${this.uri}/add`, obj)
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
              .get(`${this.uri}/edit/${id}`);
    }

  updateAddClient(client_name, client_detail, id) {
    const obj = {
      client_name: client_name,
      client_detail: client_detail
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteAddClient(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
  }


}
