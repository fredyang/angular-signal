import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  enabled = true;
  log(...args: any[]) {
    if (this.enabled) {
      console.log(...args);
    }
  }
}
