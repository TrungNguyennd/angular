import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
public name ='';
public password  ='';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
   console.log("cố lên trung nhé");
  }
}
