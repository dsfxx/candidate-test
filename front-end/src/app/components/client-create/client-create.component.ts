import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms';
import { ClientService } from '../../client.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})


export class ClientCreateComponent implements OnInit {
  @ViewChild('myForm') public createClientForm: NgForm;
  angForm: FormGroup;

  constructor(private clientservice: ClientService,
              private fb: FormBuilder,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      client_name: ['', Validators.required ],
      client_detail: ['', Validators.required ]
   });
  }

  addClient(client_name, client_detail) {
    this.clientservice.addClient(client_name, client_detail);
    this.createClientForm.reset();
  }

  ngOnInit() {
  }

}
