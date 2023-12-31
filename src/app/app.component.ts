import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncComponent } from './async/async.component';
import { BaseComponent } from './base.component';
import { SyncComponent } from './sync/sync.component';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AsyncComponent, SyncComponent],
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
