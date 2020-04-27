import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  item5: any[];
  headElements = ['ID', 'DateTime', 'UserID', 'Report'];
  constructor(private router: Router) { }

  ngOnInit() {
    this.item5 = JSON.parse(localStorage.getItem('sysInfo'));
    console.log(this.item5);
  }
  exitSys(){
    this.router.navigate(['']);
  }

}
