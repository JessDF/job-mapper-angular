import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchForumComponent } from './search-forum/search-forum.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: SearchForumComponent},
  {path: 'About', component: AboutComponent},
  {path: 'LogIn', component: LoginComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
