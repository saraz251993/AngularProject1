import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../login/user';
import { DataService } from '../data.service';
@Component({
  selector: 'app-createpage',
  templateUrl: './createpage.component.html',
  styleUrls: ['./createpage.component.css']
})
export class CreatepageComponent implements OnInit {
  user1=new User('','','','');
  constructor(private router: Router,private data: DataService) { }

  ngOnInit() {
  }
  completeCreate(){
    this.data.passMessage(this.user1);
    console.log(this.user1);
    this.router.navigate(['']);
  }
}
