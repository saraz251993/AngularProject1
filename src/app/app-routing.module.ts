import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgetpageComponent } from './forgetpage/forgetpage.component';
import { CreatepageComponent } from './createpage/createpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { SystemComponent } from './system/system.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'forget', component: ForgetpageComponent},
  {path: 'create', component: CreatepageComponent},
  {path: 'user', component:  UserpageComponent},
  {path: 'admin', component:  AdminpageComponent},
  {path: 'sys', component:  SystemComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
