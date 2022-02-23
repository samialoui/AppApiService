import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() dep:any;
  departmentId!:string;
  departmentName!:string;

  ngOnInit(): void {
    this.departmentId= this.dep.departmentId;
    this.departmentName=this.dep.departmentName;
  }

  addDepartment(){
    var val={departmentId:this.departmentId,
             departmentName:this.departmentName}
    this.service.addDepartment(val);
    alert("Add Successfully");
  }
  editDepartment(){
    var val ={departmentId:this.departmentId,
              departmentName:this.departmentName}
              this.service.editDepartment(val);
              alert("Edit Successfully");
  }

}
