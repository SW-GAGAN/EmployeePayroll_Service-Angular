import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeHeaderComponent } from './employee-header/employee-header.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeHeaderComponent,
    EmployeeHomeComponent,
    EmployeeAddComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
