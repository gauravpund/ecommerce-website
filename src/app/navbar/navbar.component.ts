import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token:any;
  constructor(private api: ApiService) {
    this.token=localStorage.getItem('token')
  }
  catlist:any;

  ngOnInit() 
  {
    this.api.getCatList().subscribe((res:any)=>{
      console.log(res);
      this.catlist=res;
    })

  }
  logout()
  {
    localStorage.clear();
    // localStorage.removeItem('token');
    this.token=localStorage.getItem('token');
  }

}
