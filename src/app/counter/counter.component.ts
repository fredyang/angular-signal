import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { LogService } from '../log.service';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'box',
  },
})
export class CounterComponent extends BaseComponent {
  constructor(logService: LogService) {
    super(logService);
  }

  counter = 0;

  increment() {
    this.counter = this.counter + 1;
  }
}
