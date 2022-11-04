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
  }

  selectOption(tech: any) {
    console.log(tech)
    this.optionsEvent.emit(tech)
  }

}
