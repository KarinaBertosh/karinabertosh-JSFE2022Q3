import './Score.scss';
import { BaseComponent } from '../base-components';


export class Score extends BaseComponent {
  constructor() {
    super('div', ['score']);
    this.element.innerHTML = `Score: 0`;
  }
}