import { BaseComponent } from '../base-components';
import './style.scss';

export class Input extends BaseComponent {
  constructor() {
    super('input', ['input-tooltip']);
    // this.element.innerHTML = `<input type="text" value=""></input>`;
  }
}
