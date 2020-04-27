import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import {userReport} from './userReport';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  todayNumber: number = Date.now();
  todayDate : Date = new Date();
  allowedReset=false;
  message='';
  userDisplayName = '';
  userReport1=new userReport( 24 ,'','');

  constructor(private data: DataService, private router: Router) {

  }

  ngOnInit() {
    console.log(sessionStorage.getItem('userID'));
    this.userDisplayName = sessionStorage.getItem('userID');
    this.data.currentMessage.subscribe(message => this.message = message);

  }
  getUser(){
    if (this.userReport1.report==''){
      return this.allowedReset=false;
    }
    else{
      return this.allowedReset=true;
    }

  }
  submitReport(){
    this.userReport1.date=this.todayNumber;
    this.userReport1.userID=this.userDisplayName;
    this.data.passMessage(this.userReport1);
    console.log(this.userReport1);
    this.router.navigate(['logout']);
  }
  newMessage() {
    this.data.nextMessage("Second Message")
  }

}
