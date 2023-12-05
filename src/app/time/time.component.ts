import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BaseComponent } from '../base.component';
import { AsyncPipe, DatePipe } from '@angular/common';
import { LogService } from '../log.service';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DatePipe, AsyncPipe],
  providers: [DatePipe],
  templateUrl: './time.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './time.component.scss',
  host: {
    class: 'box',
  },
})
export class ClockComponent extends BaseComponent {
  now = new Date();

  constructor(logService: LogService, private date: DatePipe) {
    super(logService);
  }

  update() {
    setTimeout(() => {
      this.now = new Date();
      console.log(
        'time is updated to ',
        this.date.transform(this.now, 'mediumTime')
      );
    }, 2000);
  }
}
