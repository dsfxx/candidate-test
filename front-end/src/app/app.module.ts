import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientIndexComponent } from './components/client-index/client-index.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ClientService } from './client.service';
import { EmployeeService } from './employee.service';
import { EmployeeIndexComponent } from './components/employee-index/employee-index.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

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
  },
  {
    path: 'employee-index/:id',
    component: EmployeeIndexComponent
  },
  {
    path: 'employee-edit/:id',
    component: EmployeeEditComponent
  },
  {
    path: 'employee-create',
    component: EmployeeCreateComponent
  },
  {
    path: '',
    component: ClientIndexComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientCreateComponent,
    ClientIndexComponent,
    ClientEditComponent,
    EmployeeIndexComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ClientService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
