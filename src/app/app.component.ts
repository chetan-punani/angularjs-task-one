import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Options } from './options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }

  title = 'taskone';
  testForm: NgForm;
  isDropDownOpen: boolean = false;
  dropdown: string = '';
  
  optionsList: Options[] = [
    { value: "Angular" },
    { value: "React JS" },
    { value: 'Vue JS' },
    { value: 'Flutter' },
    { value: 'Android' },
  ];

  ngOnInit(): void {
   this.dropdown = this.optionsList[0].value; 
  }

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  receiveOptions($event: any) {
    this.dropdown = $event;
  }
}
