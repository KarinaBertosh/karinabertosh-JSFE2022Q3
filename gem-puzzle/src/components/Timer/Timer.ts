import { BaseComponent } from '../base-components';

import './style.scss';

export class Timer extends BaseComponent {
  gameTimer: any;

  private sec = 0;

  private currantTime = '0:00';

  constructor() {
    super('div', ['timer']);
    this.element.innerHTML = `Timer: ${this.currantTime}`;
  }

  startTimer(): void {
    this.sec = 0;
    this.rerender();
    this.gameTimer = setInterval(() => {
      this.sec += 1;
      this.rerender();
    }, 1000);
  }

  timerZero(): void {
    this.sec = 0;
    this.rerender();
  }

  stopTimer(): void {
    clearInterval(this.gameTimer);
    this.rerender();
  }

  rerender(): void {
    const min = Math.floor(this.sec / 60);
    const secNum = Math.floor(this.sec % 60);
    const sec = secNum < 10 ? `0${secNum}` : secNum;
    const currantTime = `${min}:${sec}`;
    this.currantTime = currantTime;
    this.element.innerHTML = `Timer: ${currantTime}`;
  }

  getTime(): string {
    return this.currantTime;
  }
}
