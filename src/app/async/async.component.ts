import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { AsyncPipe, DatePipe } from '@angular/common';
import { LogService } from '../log.service';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [DatePipe, AsyncPipe],
  providers: [DatePipe],
  templateUrl: './async.component.html',
  styleUrl: './async.component.scss',
  host: {
    class: 'box',
  },
})
export class AsyncComponent extends BaseComponent {
  time = new Date();

  constructor(logService: LogService, private date: DatePipe) {
    super(logService);
  }

  updateTime() {
    this.time = new Date();
    console.log(
      'time is updated to ',
      this.date.transform(this.time, 'mediumTime')
    );
  }
  update() {
    setTimeout(() => this.updateTime(), 2000);
  }
}
