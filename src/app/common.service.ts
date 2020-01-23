import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
import {User} from './user.model';
  
@Injectable()  
export class CommonService {  
  
  // posts:User[] = [];

  
  constructor(private http: Http) { }  
  
  saveUser(user){      
    return this.http.post('http://localhost:3010/api/SaveUser/', user)  
            .map((response: Response) =>response.json())              
  }  
  
  GetUser(){   
    // console.log("this is before getuser in comm");

    return this.http.get('http://localhost:3010/api/getUser/')  
    .map(response => response.json());
                          
  }  
 deleteUser(id){  
    return this.http.post('http://localhost:3010/api/deleteUser/',{'id': id})  
            .map((response: Response) =>response.json())               
  } 
  // getpost(){
  //   return this.posts;

  // }
  
}  