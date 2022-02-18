import { Component, OnInit } from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { FootwearService } from '../footwear.service';

import { Router } from '@angular/router';
import { IRegister } from '../Models/register';



@Component({
  selector: 'app-kidsfootwear',
  templateUrl: './kidsfootwear.component.html',
  styleUrls: ['./kidsfootwear.component.css']
})
export class KidsfootwearComponent implements OnInit {
  
category: IRegister = {} as IRegister;





  PD:number=1
  TSTO:number=1;
  result:number=1;
Productname: string="Pink Toddler" ;
ProductCode:number=100;
Price: number= 300;
  constructor(
    private router:Router,private FootwearService:FootwearService
    
    ) { }
   
    

  ngOnInit(): void {
  }
 order(){
    this.router.navigate(['/order'])
 }
  Place() {


      this.category.Productcode = this.ProductCode;
  
      this.category.Productname= this.Productname;
  
      this.category.Price = this.Price;
  
      this.category.Quantity = this.TSTO;
  
      this.category.Totalamount = this.result;
  
     
  
     
      alert("Order Placed Successfully");

      this.FootwearService. SaveNewCategory(this.category).subscribe(res => { console.log(res); });
  
    
  }
 
}


