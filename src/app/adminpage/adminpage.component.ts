import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  item1: any[];
  item2: any[];
  item3: any[];
  item4: any[];
  myName:any
  showEdit=false;
  editedReport='';
  index=0;
  todayNumber: number = Date.now();
  number1=0;
  headElements = ['ID', 'DateTime', 'UserID', 'Report'];
  constructor(private router: Router, private service: DataService){

    this.service.currentMessage.subscribe(
      data => {
          this.myName = data;
      });
  }
  ngOnInit() {
    this.item4 = JSON.parse(localStorage.getItem('userInfo'));
  }
  exitAdmin(){
    this.router.navigate(['sys']);
  }
  adminAccept(i){
    this.number1 = this.todayNumber;
    this.item4[i].date = this.number1;
    this.service.passAdminReport(this.item4[i]);
    console.log(this.item4[i]);
    this.item4.splice(i,1);
    localStorage.setItem('userInfo', JSON.stringify(this.item4));
  }
  adminEdit(i){
    this.showEdit=true;
    this.editedReport=this.item4[i].report;
    this.index=i;
    console.log(this.editedReport);
  }
  adminDelete(i){
      console.log(i);
      this.item4.splice(i,1);
      localStorage.setItem('userInfo', JSON.stringify(this.item4));
      console.log(this.item4);
  }
  completeEdit(){
    this.item4[this.index].report=this.editedReport;
    localStorage.setItem('userInfo', JSON.stringify(this.item4));
    this.showEdit=false;
  }
  exitLogout(){
    this.router.navigate(['logout']);
  }
}
