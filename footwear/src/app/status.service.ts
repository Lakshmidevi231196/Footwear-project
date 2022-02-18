import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StatusService {

  getOrderStatus() {

    return [

      {

        name: "Pink Toddler",

        // photo: "assets/img/angularimg.png",

        quantity: 1,

        date: "13-02-2022",

        price: 300,

        status: "packed"

      },

     

    ];

  }

}
