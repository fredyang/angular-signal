import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { LogService } from '../log.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-sync',
  standalone: true,
  imports: [DatePipe],
  providers: [DatePipe],
  templateUrl: './sync.component.html',
  styleUrl: './sync.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'box',
  },
})
export class SyncComponent extends BaseComponent {
  constructor(logService: LogService, private date: DatePipe) {
    super(logService);
  }

  time = new Date();

  updateTime() {
    this.time = new Date();
    console.log(
      'sync time is updated to ',
      this.date.transform(this.time, 'mediumTime')
    );
  }

  update() {
    this.updateTime();
  }
}
