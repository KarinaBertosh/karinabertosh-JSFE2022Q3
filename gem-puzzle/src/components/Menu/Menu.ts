import './style.scss';
import { BaseComponent } from '../base-components';
import { Button } from '../Button/Button';

export class Menu extends BaseComponent {
  constructor() {
    super('div', ['menu']);
    const startGameBtn = new Button('Shuffle and start');

    const stopGameBtn = new Button('Stop');
    const saveGameBtn = new Button('Save');
    const resultsGameBtn = new Button('Results');

    this.element.appendChild(startGameBtn.element);
    this.element.appendChild(stopGameBtn.element);
    this.element.appendChild(saveGameBtn.element);
    this.element.appendChild(resultsGameBtn.element);
  }
}
