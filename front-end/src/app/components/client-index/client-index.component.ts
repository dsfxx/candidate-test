import { Component, OnInit } from '@angular/core';
import { AddClient } from './AddClient';
import { AddClientService } from '../../addclient.service';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})

export class ClientIndexComponent implements OnInit {

  addclients: AddClients[];

  constructor(private addclientservice: AddClientService) { }

  ngOnInit() {
    this.addclientservice
      .getAddClients()
      .subscribe((data: AddClient[]) => {
      this.addclients = data;
    });
  }
}
