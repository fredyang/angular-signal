import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'box',
  },
})
export class AsyncComponent extends BaseComponent {
  constructor(
    logService: LogService,
    private date: DatePipe,
    cd: ChangeDetectorRef
  ) {
    super(logService);

    this.timeSignal = signal(new Date());
    effect(() => {
      this.time = this.timeSignal();
      console.log(
        'async time is updated to ',
        this.date.transform(this.time, 'mediumTime')
      );
      cd.markForCheck();
    });
  }

  timeSignal!: WritableSignal<Date>;

  time!: Date;

  updateTime() {
    this.timeSignal.set(new Date());
  }

  update() {
    setTimeout(() => this.updateTime(), 2000);
  }
}
