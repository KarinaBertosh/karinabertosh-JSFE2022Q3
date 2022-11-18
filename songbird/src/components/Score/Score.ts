import { BaseComponent } from '../base-components';
import './Score.scss';

export class Score extends BaseComponent {
  constructor() {
    super('div', ['score']);
    this.element.innerHTML = `Score: 0`;
  }
}
