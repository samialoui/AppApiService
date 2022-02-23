import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedService } from './shared.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
const AppRoute : Routes = [
 {path: 'employee', component:EmployeeComponent},
 {path: 'department', component: DepartmentComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    EmployeeComponent,
    AddEditEmpComponent,
    ShowEmpComponent,
    AddEditDepComponent,
    ShowDepComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoute)
  ],
  providers: [
     SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
