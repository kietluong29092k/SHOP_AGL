import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'protractor';
import { LoginService } from 'src/app/Server_Service/Login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data : any
  constructor(private ser : LoginService,private fb: FormBuilder, private route: Router) { }
   fileForm = this.fb.group({
     username :[''],
     password: ['']
   })
  ngOnInit(): void {
  }
  submit(){
    this.ser.login(this.fileForm.value).subscribe((res:any)=>{
      this.data = res 
      if(this.data[0] != null){
        if(this.data[0].roles != 1){
          localStorage.setItem("token", this.data[0].id)
          this.route.navigate(['/'])
        }
        else{
          this.route.navigate(['/dashbroad'])
        }  
      }
      else{
        alert("Tài khoản hoặc mật khẩu không đúng!")
      }
     
    })
  }

}
