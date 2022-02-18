import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloComponent } from './hello/hello.component';
import { KidsfootwearComponent } from './kidsfootwear/kidsfootwear.component';
import { LoginComponent } from './login/login.component';
import { MensfootwearComponent } from './mensfootwear/mensfootwear.component';
import { OrderComponent } from './order/order.component';
import { RatingComponent } from './rating/rating.component';
import { WomensfootwearComponent } from './womensfootwear/womensfootwear.component';


const routes: Routes = [{path:'rating',component:RatingComponent},
{path:'hello', component:HelloComponent},
{path:'order', component:OrderComponent},
{path:'womensfootwear', component:WomensfootwearComponent},
{path:'', redirectTo:'/login', pathMatch:'full'},
{path : 'login', component:LoginComponent},
{path:'mensfootwear', component:MensfootwearComponent},
{path:'apps', component:AppsComponent},
{path:'kidsfootwear', component:KidsfootwearComponent},
{path:'dashboard', component:DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
