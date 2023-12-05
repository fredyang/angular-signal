import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { BaseComponent } from './base.component';
import { CounterComponent } from './counter/counter.component';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ClockComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'box',
  },
})
export class AppComponent extends BaseComponent {
  constructor(public override logService: LogService) {
    super(logService);
  }
}
