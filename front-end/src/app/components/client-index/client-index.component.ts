import { Component, OnInit } from '@angular/core';
import { AddClient } from './AddClient';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})

export class ClientIndexComponent implements OnInit {

  addclients: AddClient[];

  constructor(private clientservice: ClientService) { }



  deleteAddClient(id, index) {
         this.clientservice.deleteClient(id).subscribe(res => {
           console.log('Deleted')
           this.addclients.splice(index, 1)
         });
     }



  ngOnInit() {
    this.clientservice
      .getClients()
      .subscribe((data: AddClient[]) => {
      this.addclients = data;
    });
  }


}
