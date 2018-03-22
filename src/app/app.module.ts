import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';

import { FormService } from './form.service';
import { RegisteredComponent } from './registered/registered.component';
import { CoursetypeService } from './coursetype.service';
import { CapitalizePipe } from './capitalize.pipe';
import { SearchPipe } from './search.pipe';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'form', component: FormComponent, canActivate: [AuthGuardService] },
  { path: 'registered', component: RegisteredComponent, canActivate: [AuthGuardService] },
  { path: 'studentDetail/:id', component: StudentDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RegisteredComponent,
    CapitalizePipe,
    SearchPipe,
    StudentDetailComponent,
    LoginComponent,
    LogoutComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpModule,
    CommonModule,
  
  ],
  providers: [FormService, CoursetypeService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
