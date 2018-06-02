import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AddClientService } from '../../addclient.service';

@Component({
  selector: 'app-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private addclientservice: AddClientService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      client_name: ['', Validators.required ],
      client_detail: ['', Validators.required ]
   });
  }

  addClient(client_name, client_detail) {
    this.addclientservice.addClient(client_name, client_detail);
}

  ngOnInit() {
  }

}
