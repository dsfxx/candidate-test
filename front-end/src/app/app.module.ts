import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientIndexComponent } from './components/client-index/client-index.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
