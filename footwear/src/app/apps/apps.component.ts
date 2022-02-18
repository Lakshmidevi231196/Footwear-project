import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { RatingComponent } from '../rating/rating.component';

import { StatusService } from '../status.service';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent  {

  static target(target: any) {

    throw new Error('Method not implemented.');

  }

 

  title(title: any) {

    throw new Error('Method not implemented.');

  }

  name = 'Angular';

 public status:any;

 constructor(private dialogRef:MatDialog, service:StatusService ){



  this.status = service.getOrderStatus();

 }

 rating(){

   this.dialogRef.open(RatingComponent);

 }
}