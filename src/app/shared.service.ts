import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly ApiUrl = "http://localhost:54290/api";
  readonly PhotoUrl = "http://localhost:54290/api/Photo";
  constructor( private http : HttpClient) { }

  //all mothodes of department
  getDepList(): Observable<any[]>{
  return this.http.get<any>(this.ApiUrl+"/department/getDepartments");
  }
  addDepartment(val: any){
    return this.http.post(this.ApiUrl+"/depatment/nouveauDep",val);
  }

  editDepartment(val: any){
  return this.http.put(this.ApiUrl+"/deparmtent/modifier",val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.ApiUrl+"/department/supprimer"+val);
  }

  getDepartmentNames(): Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/department/deparmtentNames");
  }

  //all methodes of employee
  getListEmp(): Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+"/employee");
  }

  addEmployee(val:any){
    return this.http.post(this.ApiUrl+"/employee",val);
  }
  editEmployee(val:any){
    return this.http.put(this.ApiUrl+"/employee",val);
  }
  deleteEmployee(val:any){
    return this.http.delete(this.ApiUrl+"/employee"+val);
  }

}
