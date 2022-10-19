import { BaseComponent } from '../base-components';

import './style.scss';

export class Timer extends BaseComponent {
  sec: number;

  timerText: BaseComponent;

  timeId: number | undefined;

  constructor() {
    super('div', ['timer']);

    this.timerText = new BaseComponent('div', ['time']);
    this.element.appendChild(this.timerText.element);

    this.sec = 0;

    this.timerText.element.innerHTML = '00:00'; // this.getTime();
  }

  // getTime(): string {
  //   const sec = this.sec % 60;
  //   const min = Math.floor(this.sec / 60);

  //   if (sec < 10 && min < 10) {
  //     return `0${min}:0${sec}`;
  //   } if (sec >= 10 && min < 10) {
  //     return `0${min}:${sec}`;
  //   } if (sec < 10 && min >= 10) {
  //     return `${min}:0${sec}`;
  //   }
  //   console.log(`${min}:${sec}`);

  //   return `${min}:${sec}`;
  // }

  // startTimer() : void {
  //   this.timeId = window.setInterval(
  //     () => {
  //       this.sec += 1;
  //       this.timerText.element.innerHTML = this.getTime();
  //     }, 1000,
  //   );
  // }

  // stopTimer() : void {
  //   window.clearInterval(this.timeId);
  // }
}
