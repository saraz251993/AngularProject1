import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from './user';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;
  arrayAdmin=[{username:'Sara123',password:'Warm231', password2:'Warm231', email:'sara1123@gmail.com'}];
  arrayUser=[{
   username:'Sara',password:'Peace231',password2:'Peace231',email:'sara@gmail.com'},{
    username:'Hello',password:'Joy231',password2:'Joy231',email:'deno@gmail.com'}];
  user1=new User('','','','');
  route =false;
  route1 =false;
  showError=false;
  myName:any;
  constructor(private router: Router, private service: DataService){

    this.service.currentMessage.subscribe(
      data => {
          this.myName = data;
      });
    }

  ngOnInit() {
    this.arrayUser.push(this.myName);
    console.log(this.arrayUser);
  }

  checkLogin1() {
    console.log('hi');
    for (let x of this.arrayUser){
      if(x.username === (this.user1.username) && x.password === (this.user1.password)) {
        sessionStorage.setItem('userID', this.user1.username);
        console.log(this.user1);
        this.route=true;
      }
      else{
      }
    }
    for (let y of this.arrayAdmin){
      if(y.username === (this.user1.username) && y.password === (this.user1.password)) {
        sessionStorage.setItem('adminID', this.user1.username);
        console.log(this.user1);
        this.route1=true;
      }
      else{
      }
    }
    if (this.route==true){
      this.router.navigate(['user']);
    }
    else if (this.route1==true) {
      this.router.navigate(['admin']);
    } else {
      setTimeout(()=> {
        this.showError=true;
      },2000);
      this.router.navigate(['login']);
    }

  }
  routeToForgot(){
    this.router.navigate(['forget']);
  }
  routeToCreate(){
    this.router.navigate(['create']);
  }

}
