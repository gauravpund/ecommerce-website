import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent {

  orders:any;
  constructor(private api:ApiService){
    this.api.order_list().subscribe((res:any)=>{
      this.orders=res.order_det;
      console.log(res);
    })
  }
}
