import { CommonService } from './../Services/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public name = 'trung';
public age =20;

  constructor(private common : CommonService) {
    this.age= common.age;
   }

  ngOnInit(): void {
  }

  tangtuoi(){
    this.common.age++;
    this.age = this.common.age;
  }

}
