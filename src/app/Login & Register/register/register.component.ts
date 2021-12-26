import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Server_Service/Register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fileForm = this.fb.group({
    name:[''],
    phone:[''],
    username:[''],
    password:['']
  })
  constructor(private ser : RegisterService , private fb: FormBuilder , private route : Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
       this.ser.addUser(this.fileForm.value).subscribe(()=>{alert("Đăng ký thành công!")
       this.route.navigate(['login'])})
       
  }

}
