import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit
{

  product_info:any;
  product_id:any;
  constructor(private activatedroute:ActivatedRoute,private api:ApiService)
  {
    this.activatedroute.params.subscribe((res:any)=>{
      this.product_id=res.product_id;
      this.ngOnInit()
      console.log("Particular product id",res);
     
    })
    
  }
  ngOnInit()
  {
    this.api.product_by_id(this.product_id).subscribe((res:any)=>{
      this.product_info=res;
      console.log("Particular product info",res)
    })
  }
  addtocart()
    {
      console.log(this.product_id);
      this.api.addtocart(this.product_id).subscribe((res:any)=>{
      this.ngOnInit();
      })
    }


}
