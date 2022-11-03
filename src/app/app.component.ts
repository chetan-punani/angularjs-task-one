import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Options } from './options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taskone';
  testForm: NgForm;
  isDropDownOpen: boolean = false;
  dropdown: string = '';
  
  optionsList: Options[] = [
    { value: "option 1" },
    { value: "option 2" },
    { value: 'option 3' },
    { value: 'option 4' },
    { value: 'option 5' },
  ];

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  receiveOptions($event: any) {
    this.dropdown = $event;
    console.log("parent:" + $event);
  }
}
