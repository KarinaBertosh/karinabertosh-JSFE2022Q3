import './style.scss';
import { BaseComponent } from '../base-components';
import { Button } from '../Button/Button';

export class GameSettings extends BaseComponent {
  constructor() {
    super('div', ['settings']);
    this.element.innerHTML = `     
      <p>Other sizes:</p> 
   `;
    const field9 = new Button('3*3');
    const field16 = new Button('4*4', ['active']);
    const field25 = new Button('5*5');
    const field36 = new Button('6*6');
    const field49 = new Button('7*7');
    const field64 = new Button('8*8');

    this.element.appendChild(field9.element);
    this.element.appendChild(field16.element);
    this.element.appendChild(field25.element);
    this.element.appendChild(field36.element);
    this.element.appendChild(field49.element);
    this.element.appendChild(field64.element);
  }
}
