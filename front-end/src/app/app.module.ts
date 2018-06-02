import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientIndexComponent } from './components/client-index/client-index.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientCreateComponent,
    ClientIndexComponent,
    ClientEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
