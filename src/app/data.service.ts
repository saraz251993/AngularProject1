import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  userDataArray=[];
  sharingData = {};
  adminDataArray=[];
  sharingUser = {};
  newUser={};
  private message1 = new BehaviorSubject<any>({});
  currentMessage = this.message1.asObservable();
  private message2 = new BehaviorSubject<any>({});
  currentMessage2 = this.message2.asObservable();
  constructor() { }
  nextMessage(message1: string) {
    this.message1.next(message1);
  }
 passMessage(report) {
   console.log(report);
   this.sharingData = report;
   this.userDataArray.push(this.sharingData);
   localStorage.setItem('userInfo', JSON.stringify(this.userDataArray));
   this.message1.next(this.sharingData);
 }
 passAdminReport(accepted){
  this.sharingUser = accepted;
  this.adminDataArray.push(this.sharingUser);
  localStorage.setItem('sysInfo', JSON.stringify(this.adminDataArray));
 }
 passLogin(user){
   this.newUser=user;
   this.message2.next(this.newUser);
 }
}
