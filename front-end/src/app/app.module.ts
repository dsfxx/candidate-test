import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientIndexComponent } from './components/client-index/client-index.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AddClientService } from './addclient.service';

const routes: Routes = [
  {
    path: 'client-create',
    component: ClientCreateComponent
  },
  {
    path: 'client-edit/:id',
    component: ClientEditComponent
  },
  {
    path: 'client-index',
    component: ClientIndexComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientCreateComponent,
    ClientIndexComponent,
    ClientEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule
  ],
  providers: [AddClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
