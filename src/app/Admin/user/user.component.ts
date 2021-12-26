import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/Server_Service/Admin/admin.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  dskh:any
  experr = false
  dsmua:any
  constructor(private ser: AdminService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ser.getdskh().subscribe((res:any)=>{
      this.dskh = res
      console.log(this.dskh)
    })
  }
  delete(id:any){
    if(confirm("Xác nhận xóa người dùng") == true){
      this.ser.deleteuser(id).subscribe(()=>{
        window.location.reload()
      })
    }else{}
  }
  view(id:any){
    this.experr = true
    this.ser.getslmua(id).subscribe((res:any)=>{
      this.dsmua = res
      console.log(this.dsmua)
    })
  }
  close(){
    this.experr = false
    window.location.reload()
  }
}
