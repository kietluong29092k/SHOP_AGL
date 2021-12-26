import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/Server_Service/Admin/admin.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {
  choduyet = false;
  daduyet = false;
  experr = false
  c:Date | undefined
  grform:any
  dany:any
  dsmua:any
  form:any
  constructor(private ser: AdminService, private fb : FormBuilder) { }
  dsdd:any
  ngOnInit(): void {
    this.ser.getdsdd1().subscribe((res:any)=>{
      this.dsdd = res
    })
  }
  update(ida:any){
  this.form = this.fb.group({
    id: [ida],
    trangthai: [1]
  })
    if(confirm("Xác nhận đơn hàng")===true){
      this.ser.update(this.form.value).subscribe(()=>{
        window.location.reload()
      })
    }else{}
  }
  close(){
    this.experr = false
    window.location.reload()
  }
  view(a:any,b:any){
    this.experr = true
    let date = new Date(b)
    var curr_date =("00" + date.getDate()).slice(-2);
    var curr_month = ("00" + (date.getMonth() + 1)).slice(-2);
    var curr_year = date.getFullYear();
    var curr_hh =("00" + date.getHours()).slice(-2);
    var cur_mm = ("00" + date.getMinutes()).slice(-2);
    var cur_Ss =("00" + date.getSeconds()).slice(-2)
    let d = curr_year + "-" + curr_month + "-" + curr_date + " " + curr_hh+":"+cur_mm+":"+cur_Ss
    this.grform = this.fb.group({
      id_user:[a],
      ngaytao:[d]
    })
    this.ser.xemsp(this.grform.value).subscribe((res:any)=>{
      this.dany = res
      console.log(this.dany)
    })
  }

}
