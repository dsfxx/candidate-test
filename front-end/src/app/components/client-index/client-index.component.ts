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


  deleteAddClient(id) {
      this.addclientservice.deleteAddClient(id).subscribe(res => {
        console.log('Deleted');
      });
  }

  ngOnInit() {
    this.addclientservice
      .getAddClients()
      .subscribe((data: AddClient[]) => {
      this.addclients = data;
    });
  }
}
