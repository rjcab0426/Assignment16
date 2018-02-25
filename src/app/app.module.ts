import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { FormService } from './form.service';
import { RegisteredComponent } from './registered/registered.component';
import { CoursetypeService } from './coursetype.service';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RegisteredComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FormService, CoursetypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
