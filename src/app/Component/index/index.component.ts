import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/Server_Service/Index/index.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  spbc:any
  sptb:any
  spm:any
  constructor(private ser : IndexService) { }

  ngOnInit(): void {
    this.ser.getspbc(1).subscribe((res:any)=>{
      this.spbc = res

    })
  
    this.ser.getspbc(2).subscribe((res:any)=>{
      this.sptb = res
  
    })
    this.ser.getspbc(3).subscribe((res:any)=>{
      this.spm = res
  
    })
  }

}
