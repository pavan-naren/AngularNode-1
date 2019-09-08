import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service'; 

import {User} from '../user.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
   
   constructor(public postService:CommonService){

   }
   Repdata;
   ngOnInit(){
        this.postService.GetUser().subscribe(data =>  this.Repdata = data);


   }
   
   edit = function(post){
     console.log(post.firstName);

     
   }
   delete = function(id) {  
this.postService.deleteUser(id)  
.subscribe(data =>   {  this.ngOnInit();}, error => this.errorMessage = error )   
}  


}

