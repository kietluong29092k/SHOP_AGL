import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin=false;
  isNotLogin = false;
  kiemtra:any
  constructor( private fb: FormBuilder) { }
  fileForm = this.fb.group({
    tensp:['']
  })
  ngOnInit(): void {
      if(window.localStorage.getItem("token") != null){
        this.isLogin = true;
      }
      else
      this.isNotLogin = true;
    }
    logout(){
      localStorage.clear()
      alert("Đăng xuất thành công!")
      window.location.reload(); 
    }

  }


