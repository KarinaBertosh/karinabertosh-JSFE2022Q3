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
}
