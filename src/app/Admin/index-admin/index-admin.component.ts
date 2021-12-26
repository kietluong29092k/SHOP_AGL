import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Server_Service/Admin/admin.service';

@Component({
  selector: 'app-index-admin',
  templateUrl: './index-admin.component.html',
  styleUrls: ['./index-admin.component.css']
})
export class IndexAdminComponent implements OnInit {
  
  today: number = Date.now();
  sl:any
  dstong:any
  slduyet:any
  dsdd:any
  tongall:any
  dskh:any
  constructor(private ser: AdminService ) { }
  ngOnInit(): void {
    this.ser.getsl().subscribe((res:any)=>{
      this.sl = res
    })
    this.ser.getslduyet().subscribe((res:any)=>{
      this.slduyet = res
    })
    this.ser.getdsdd().subscribe((res:any)=>{
      this.dsdd = res
    })
    this.ser.getdskh().subscribe((res:any)=>{
      this.dskh = res
    })
    this.ser.gettong().subscribe((res:any)=>{
      this.dstong = res
    })
    this.ser.gettongket().subscribe((res:any)=>{
      this.tongall = res
    })
  }

}
