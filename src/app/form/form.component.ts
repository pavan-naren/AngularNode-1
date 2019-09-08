import{ Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommonService} from '../common.service'; 

@Component({
selector:'app-form',
styleUrls:['./form.component.css'],
templateUrl:'./form.component.html',
})

export class FormComponent{

  constructor(private newService :CommonService,) {   }  
  Repdata;  
  // valbutton ="Save"; 
  // ngOnInit() {    
  //   this.newService.GetUser().subscribe(data =>  this.Repdata = data)  
  // }  

       
        onAddPost = function(user:NgForm){
          if(user.valid){
          // user.mode= this.valbutton; 
          console.log(user.valid);
          
  this.newService.saveUser(user.value).subscribe(data =>  {  alert(data.data) }, error => this.errorMessage = error )  ;
          }
}  
  }
          
          //  }