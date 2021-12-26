import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/Server_Service/Admin/admin.service';
import { IndexService } from 'src/app/Server_Service/Index/index.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  constructor(private ser: AdminService , private serv : IndexService, private fb:FormBuilder) { }
  dsloaisp:any = []
 ngOnInit(): void {
   this.ser.getloaisp().subscribe((res:any)=>{
     this.dsloaisp = res
   })
 }
 fileForm = this.fb.group({
   maloai : [''],
   tensp : [''],
   sl : [''],
   img : [''],
   giaban : [''],
   mota : [''],
 })
 submit(){
   if(confirm("Xác nhận thêm đơn hàng")===true){
     this.ser.postdsitem(this.fileForm.value).subscribe(()=>{
     alert("Thêm thành công")
     window.location.reload()
   })
   }else{}
   
 }
}
