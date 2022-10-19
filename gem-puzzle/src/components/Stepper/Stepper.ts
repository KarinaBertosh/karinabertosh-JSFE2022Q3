import './style.scss';
import { BaseComponent } from '../base-components';

export class Stepper extends BaseComponent {
  constructor(steps: number) {
    super('div', ['stepper']);
    this.element.innerHTML = `     
    <p>Moves:</p>
    <p>${steps}</p>
   `;
  }
}
