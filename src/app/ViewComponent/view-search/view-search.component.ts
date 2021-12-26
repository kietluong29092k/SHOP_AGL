import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewService } from 'src/app/Server_Service/ViewItem/view.service';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent implements OnInit {
  sptb:any
  id:any
  constructor(private ser : ViewService, private Avtive: ActivatedRoute) {
    this.Avtive.params.subscribe(param =>{
      this.id = param['id']
      this.ser.viewShow(this.id).subscribe((res:any)=>{
        this.sptb = res
      })
    })
   }
  
  ngOnInit(): void {
  
  }

}
