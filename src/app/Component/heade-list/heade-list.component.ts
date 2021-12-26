import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-heade-list',
  templateUrl: './heade-list.component.html',
  styleUrls: ['./heade-list.component.css']
})
export class HeadeListComponent implements OnInit {
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

