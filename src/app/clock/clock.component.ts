import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BaseComponent } from '../base.component';
import { AsyncPipe, DatePipe } from '@angular/common';
import { LogService } from '../log.service';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DatePipe, AsyncPipe],
  templateUrl: './clock.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './clock.component.scss',
  host: {
    class: 'box',
  },
})
export class ClockComponent extends BaseComponent {
  now = signal(new Date());

  // now$ = interval(1000).pipe(map((_) => new Date()));
  constructor(logService: LogService) {
    super(logService);
    setInterval(() => {
      this.now.set(new Date());
    }, 1000);
  }
}
