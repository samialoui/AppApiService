import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  
  constructor( private service: SharedService) { }
  departmentList: any=[];
  ActivateAddEditDepComp:boolean=false;
  ModalTitle!:string;
  dep:any;
  ngOnInit(): void {
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.departmentList = data;
    })
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""

    }
    this.ActivateAddEditDepComp=true;
    this.ModalTitle = "Add Department";

  }
  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDepComp=true;

  }
  deleteClick(item:any){
    if(confirm("Are you sure!!")){
      this.service.deleteDepartment(item.DepartmentId);
      alert("Deleted successfully");
      this.ActivateAddEditDepComp=false;
      this.refreshDepList();
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }
}
