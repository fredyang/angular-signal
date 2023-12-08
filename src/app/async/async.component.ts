import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { AsyncPipe, DatePipe } from '@angular/common';
import { LogService } from '../log.service';
import { BehaviorSubject } from 'rxjs';

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
  constructor(logService: LogService, private date: DatePipe) {
    super(logService);
  }

  private subject = new BehaviorSubject(new Date());
  time$ = this.subject.asObservable();

  updateTime() {
    const time = new Date();
    this.subject.next(time);
    console.log(
      'async time is updated to ',
      this.date.transform(time, 'mediumTime')
    );
  }

  update() {
    setTimeout(() => this.updateTime(), 2000);
  }
}
