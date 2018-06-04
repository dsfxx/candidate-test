import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AddClient } from '../client-index/addclient';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})

export class ClientEditComponent implements OnInit {

  addclient: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private clientservice: ClientService,
    private fb: FormBuilder) {
      this.createForm();
    }

    createForm() {
      this.angForm = this.fb.group({
             client_name: ['', Validators.required ],
              client_detail: ['', Validators.required ]
         });
      }

      updateClient(client_name, client_detail) {
         this.route.params.subscribe(params => {
            this.clientservice.updateClient(client_name, client_detail, params['id']);
            this.router.navigate(['client-index']);
         });
      }



    ngOnInit() {
      this.route.params.subscribe(params => {
        this.clientservice.editClient(params['id']).subscribe(res => {
          this.addclient = res;
      });
    });
  }
}

