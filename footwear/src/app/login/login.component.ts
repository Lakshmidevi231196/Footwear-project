import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootwearService } from '../footwear.service';
import { IRegister } from '../Models/register';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
   user: IRegister = {} as IRegister;
  
  constructor(private router:Router,FootwearService:FootwearService) { }
  ngOnInit(): void {
  }
  exampleInputEmail1:string='';

  exampleInputPassword1:number=1;



  inputAlertVisible1:any=false;

  inputAlertVisible2:any=false;

  showPassword:any=false;


login(){
  if(this.exampleInputEmail1 != "" && this.exampleInputPassword1 != 0){

    this.router.navigate(['/dashboard']);
}
// if(this.exampleInputEmail1 == this.user.username && this.exampleInputPassword1 == this.user.password){

   

//   this.router.navigate(['/dashboard']);

//   console.log(this.user.username );



  // console.log();

 

}

}

