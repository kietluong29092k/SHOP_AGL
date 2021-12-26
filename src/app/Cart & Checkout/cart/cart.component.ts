import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Server_Service/Cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  x:any = localStorage.getItem("token");
  danhsach:any
  sl:any;
  tongtien:any
  n: number | undefined;
  constructor(private ser:CartService,private fb: FormBuilder, private route :Router) { }
  ngOnInit(): void {
   this.ser.getCart(this.x).subscribe((res:any)=>{
     this.danhsach = res
   })
   this.ser.getTongTien(this.x).subscribe((res:any)=>{
    this.tongtien = res
  })
  }
  thanhtoan(){
    if(localStorage.getItem("token") !=null){
      if(this.danhsach[0] != null){
         this.ser.UpdateItem(this.form.value).subscribe(()=>{  
          this.ser.CheckCart(this.thisaddtime.value).subscribe(()=>{})
          alert("Đặt hàng thành công!")    
          this.route.navigate(['/check'])
       })    
      }
      else{
        alert("Đơn hàng của bạn đang rỗng, vui lòng đặt hàng trước khi thanh toán !")
        this.route.navigate(['/'])
      }
    }
    else{
      alert("Bạn chưa đăng nhập")
      this.route.navigate(['/login'])
    }
  }
  form = this.fb.group({
    id_user:this.x,
    tinhtrang:1
  })
  thisaddtime = this.fb.group({
    id_user:this.x
  })
  deleteCart(ida:number){
   this.ser.deleteItem(ida).subscribe(()=>{
     window.location.reload()
   })
  }

}
