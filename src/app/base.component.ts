import { LogService } from './log.service';

export class BaseComponent {
  constructor(public logService: LogService) {}
  logCd() {
    this.logService.log(this.constructor.name, ' detecting changes');
  }
}
