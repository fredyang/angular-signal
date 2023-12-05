import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { DatePipe } from '@angular/common';
import { LogService } from '../log.service';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './clock.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './clock.component.scss',
  host: {
    class: 'box',
  },
})
export class ClockComponent extends BaseComponent {
  time = new Date();

  constructor(logService: LogService) {
    super(logService);
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
