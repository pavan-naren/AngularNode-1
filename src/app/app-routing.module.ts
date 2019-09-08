import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent} from './form/form.component';
import { PostsComponent} from './posts/posts.component';

const routes: Routes = [
  {path: '' , component: FormComponent},
  {path: 'data' , component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
