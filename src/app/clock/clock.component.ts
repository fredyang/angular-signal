import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss',
})
export class ClockComponent extends BaseComponent {
  time = new Date();

  constructor() {
    super();
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
