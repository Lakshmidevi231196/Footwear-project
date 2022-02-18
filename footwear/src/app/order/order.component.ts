import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
PD:number=1
TSTO:number=1;
result:number=1;
submit(){
  this.result=this.PD * this.TSTO;
}

  constructor() { }
  
  ngOnInit(): void {
  }
  
  Place() {
    alert("Order Placed Successfully");
  }

}
