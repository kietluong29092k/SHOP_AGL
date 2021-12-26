import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { AdminService } from 'src/app/Server_Service/Admin/admin.service';
import { IndexService } from 'src/app/Server_Service/Index/index.service';
import { Item } from 'src/app/Server_Service/TSfoder/Item';
import { ViewService } from 'src/app/Server_Service/ViewItem/view.service';

@Component({
  selector: 'app-view-list-item',
  templateUrl: './view-list-item.component.html',
  styleUrls: ['./view-list-item.component.css']
})
export class ViewListItemComponent implements OnInit {

  constructor(private ser: AdminService , private serv : IndexService, private fb:FormBuilder,private vie:ViewService) { }
  experr = false
  loaddau = true
  loadsau = false
  formFile:any
   dsloaisp:any = []
   xemchitiet:any = []
   dsdau:any =[]
   dssanpham:any = []
  ngOnInit(): void {
    this.ser.getloaisp().subscribe((res:any)=>{
      this.dsloaisp = res
    })
    this.serv.getspbc(1).subscribe((res:any)=>{
      this.dsdau = res
    })
    
  }
  file = this.fb.group({
    maloai:[null]
  })
  submit(){
    this.serv.getspbc(this.file.controls["maloai"].value).subscribe((res:any)=>{
      this.dssanpham = res
      this.loaddau = false
      this.loadsau = true
    })
  }
  delete(id:any){
    if(confirm("Xác nhận xóa sản phẩm") == true){
      this.ser.deleteItem(id).subscribe(()=>{
        window.location.reload()
      })
    }else{}
  }
  show(id:number){
    this.experr = true
    this.vie.view(id).subscribe((res :any)=>{
      this.xemchitiet = res
    })
  }
  close(){
    this.experr = false
    window.location.reload()
  } 
 
  update(id:any){
    this.formFile = this.fb.group({
      tensp : [''],
      sl : [''],
      img : [''],
      giaban :[''],
      mota :[''],
      id:[id]
    })
   console.log(this.formFile.value)
  }


}
