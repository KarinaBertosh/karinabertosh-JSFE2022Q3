import './style.scss';
import { BaseComponent } from '../base-components';
import { Button } from '../Button/Button';

export class GameSettings extends BaseComponent {
  constructor(size: number) {
    super('div', ['settings']);
    this.element.innerHTML = `     
      <p>Other sizes:</p> 
   `;
    console.log(size);

    const field9 = new Button('3*3', size === 9 ? ['active'] : []);
    const field16 = new Button('4*4', size === 16 ? ['active'] : []);
    const field25 = new Button('5*5', size === 25 ? ['active'] : []);
    const field36 = new Button('6*6', size === 36 ? ['active'] : []);
    const field49 = new Button('7*7', size === 49 ? ['active'] : []);
    const field64 = new Button('8*8', size === 64 ? ['active'] : []);

    this.element.appendChild(field9.element);
    this.element.appendChild(field16.element);
    this.element.appendChild(field25.element);
    this.element.appendChild(field36.element);
    this.element.appendChild(field49.element);
    this.element.appendChild(field64.element);
  }
}
