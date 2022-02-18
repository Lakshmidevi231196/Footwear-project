import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister } from './Models/register';

@Injectable({
  providedIn: 'root'
})
export class FootwearService {
  constructor(private http: HttpClient) {
    console.log("Coming from service");
  }
  // GetMasterMaintenance(): Observable<IRegister[]> {
  //   return this.http.get<IRegister[]>("http://localhost:8080/api/getAllRegisterdata");
  // }
  //post
  SaveNewCategory(category: IRegister) {

   return this.http.post("http://localhost:8080/api/Orderdetails", category);
   }

 
  }