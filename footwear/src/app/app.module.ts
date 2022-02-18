import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KidsfootwearComponent } from './kidsfootwear/kidsfootwear.component';
import { LoginComponent } from './login/login.component';
import { WomensfootwearComponent } from './womensfootwear/womensfootwear.component';
import { MensfootwearComponent } from './mensfootwear/mensfootwear.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { HelloComponent } from './hello/hello.component';
import { AppsComponent } from './apps/apps.component';
import { RatingComponent } from './rating/rating.component';
import {MatDialogModule } from '@angular/material/dialog';
import { FootwearService } from './footwear.service';


import {MatButtonModule} from '@angular/material/button';
// import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    KidsfootwearComponent,
    LoginComponent,
    WomensfootwearComponent,
    RatingComponent,
    HelloComponent ,
    MensfootwearComponent,
    DashboardComponent,
    OrderComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
 HttpClientModule,
 FormsModule,

 ReactiveFormsModule,
BrowserAnimationsModule,
MatButtonModule,
// NgxStarRatingModule
NgxStarRatingModule

  ],
  providers: [FootwearService],
  bootstrap: [AppComponent]
})
export class AppModule { }
