import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AddClient } from '../index/AddClient';
import { AddClientService } from '../../addclient.service';

@Component({
  selector: 'app-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})

export class ClientEditComponent implements OnInit {


  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private addclientservice: AddClientService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
             client_name: ['', Validators.required ],
              client_detail: ['', Validators.required ]
         });
      }

      updateAddClient(client_name, client_detail) {
         this.route.params.subscribe(params => {
            this.addclientservice.updateAddClient(client_name, client_detail, params['id']);
            this.router.navigate(['client-index']);
         });
      }



    ngOnInit() {
      this.route.params.subscribe(params => {
        this.addclientservice.editAddClient(params['id']).subscribe(res => {
          this.addclient = res;
      });
    });
  }
}

