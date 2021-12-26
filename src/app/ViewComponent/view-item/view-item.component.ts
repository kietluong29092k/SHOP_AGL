import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewService } from 'src/app/Server_Service/ViewItem/view.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  dsload :any
  id:any
   x:any = localStorage.getItem("token");
   y:any = localStorage.getItem("id");
  constructor(private route: Router,private Active : ActivatedRoute, private ser :ViewService, private fb:FormBuilder) { 
    this.Active.params.subscribe(param =>{
      this.id = param['id']
    this.ser.view(this.id).subscribe((res:any)=>{
      this.dsload = res
      localStorage.setItem("id",this.dsload[0].id) 
    })
  })
  }
  listForm = this.fb.group({
    id_sp:[this.y],
    sl_sp:[''],
    id_user:[this.x]
  })
  ngOnInit(): void {
  
  }
  submit(){
    if(this.x != null){
       this.ser.inserCart(this.listForm.value).subscribe(()=>{
    })
  alert("Đặt hàng thành công!")
    }
    else {
      alert("Bạn cần đăng nhập!")
      this.route.navigate(['/login'])
    }
   
  }
}


