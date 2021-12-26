import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/Server_Service/Index/index.service';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  sptb:any
  id:any
  constructor(private ser:IndexService, private Avtive: ActivatedRoute) {
    this.Avtive.params.subscribe(param =>{
      this.id = param['id']
      this.ser.getspbc(this.id).subscribe((res:any)=>{
        this.sptb = res
      })
    })
   }
  
  ngOnInit(): void {
  
  }

}