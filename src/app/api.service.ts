import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 

  }
  endpoint="https://a2zithub.org/dairy/abi/";
  getCatList()
  {
    return this.http.get(this.endpoint+'product_cat_details')
  }
 
  register(data:any)
  {
    return this.http.post(this.endpoint+'user_register',data)
  }
  login(data:any)
  {
    return this.http.post(this.endpoint+'user_login',data)
  }
  slider_det()
  {
    return this.http.get(this.endpoint+'slider_det')
  }
  product_det()
  {
    return this.http.get(this.endpoint+'product_det');
  }
  products_by_cat(cat_id:any)
  {
    var obj={"cat_id":cat_id}
    return this.http.post(this.endpoint+'products_by_cat',obj);
  }
  product_by_id(id:any)
  {
    var obj={"product_id":id,"token":localStorage.getItem('token')};
    return this.http.post(this.endpoint+'product_by_id',obj);

  }
  addtocart(id:any)
  {
    var obj={"product_id":id,"token":localStorage.getItem('token')};
    return this.http.post(this.endpoint+'addtocart',obj);
  }
  cart_list()
  {
    var obj={"token":localStorage.getItem('token')}
    return this.http.post(this.endpoint+'cart_list',obj)
  }
  inc_cart_qty(product_econ_cart_id:any)
  {
    var obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem('token')}
    return this.http.post(this.endpoint+'inc_cart_qty',obj)
  }
  dec_cart_qty(product_econ_cart_id:any)
  {
    var obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem('token')}
    return this.http.post(this.endpoint+'dec_cart_qty',obj)
  }
  remove_cart_qty(product_econ_cart_id:any)
  {
    var obj={"product_econ_cart_id":product_econ_cart_id,"token":localStorage.getItem('token')}
    return this.http.post(this.endpoint+'remove_cart_qty',obj)
  }
  placeOrder(data:any)
  {
    data.token=localStorage.getItem('token');
    return this.http.post(this.endpoint+'place_order',data)

  }
  order_det(order_id:any)
  {
    var obj={"order_id":order_id,"token":localStorage.getItem('token')};
    return this.http.post(this.endpoint+'order_det',obj)
  }
  order_list()
  {
    var obj={"token":localStorage.getItem('token')};
    return this.http.post(this.endpoint+'order_list',obj)
  }
}
