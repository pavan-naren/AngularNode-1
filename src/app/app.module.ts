import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';   
  
import { HttpModule } from '@angular/http';  
 
  

  
import {CommonService} from './common.service'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormComponent } from './form/form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatInputModule, 
  
  MatButtonModule,
  MatExpansionModule,
 } from '@angular/material';
 import { MatTabsModule, MatSidenavModule } from '@angular/material';

import { SavedDataComponent } from './saved-data/saved-data.component';
import {  MatToolbarModule
  
 } from '@angular/material';
import { HeaderComponent } from './navigation/header/header.component';
import {  MatIconModule } from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { PostsComponent } from './posts/posts.component';


  
  
@NgModule({  
  declarations: [  
    AppComponent  ,
    FormComponent,
  
    
    SavedDataComponent,
  
    
    HeaderComponent,
  
    
    PostsComponent
  ],  
  imports: [  
    BrowserModule,HttpModule,FormsModule,  
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule, MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    
  
    
    MatInputModule,
     MatCardModule,
     MatButtonModule,
     MatExpansionModule,
     RoutingModule,
    
  ],  
  providers: [CommonService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { } 