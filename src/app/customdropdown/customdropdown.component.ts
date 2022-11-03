import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Options } from '../options';

@Component({
  selector: 'app-customdropdown',
  templateUrl: './customdropdown.component.html',
  styleUrls: ['./customdropdown.component.scss']
})

export class CustomdropdownComponent implements OnInit {

  constructor() { }

  @Input('options') options: Options[];
  @Output() optionsEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.options.forEach((opt) => {
      opt.isActive = false;
    });
    this.options.splice(0, 0, { value: '', isActive: true });
    
  }

  selectOption(evt: any, optionIndex: number) {
    this.options.forEach((opt: any, index: number) => {
      opt.isActive = optionIndex === index;
    });
    this.optionsEvent.emit(evt.target.innerHTML)
  }

}
