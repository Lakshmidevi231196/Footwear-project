import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  rating3: number;
  public form: FormGroup;
  elementRef: any;
  router: any;

  constructor(private fb: FormBuilder){
    this.rating3 = 0;
    this.form = this.fb.group({
      rating1: ['', Validators.required],
      rating2: [4]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  sub(){
  
   

    alert("Thank you For Your Feedback..!");
    // this.router.navigate('app');
  }

}
