import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {

  constructor(private api:ApiService,private router:Router)
  {


  }
  saveAddress(formdata:any)
  {
    this.api.placeOrder(formdata.value).subscribe((res:any)=>{
      this.router.navigate(['/order-det/'+res.order_id])
      console.log("Sended data Address",res.order_id)

    })
    console.log("Address",formdata.value)
  }
}
