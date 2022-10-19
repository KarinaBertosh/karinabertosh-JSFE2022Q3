import { BaseComponent } from './base-components';
import { CardField } from './CardField/CardField';
import { CardFieldFrameSize } from './CardFieldFrameSize/CardFieldFrameSize';
import { Menu } from './Menu/Menu';
import { GameSettings } from './GameSettings/GameSettings';
import { Stepper } from './Stepper/Stepper';
import { Timer } from './Timer/Timer';

export class App extends BaseComponent {
  constructor() {
    super('main', ['app']);

    const menu = new Menu();
    const step = new Stepper(1);
    const timer = new Timer();
    const cardField = new CardField();

    const defaultNums = [1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    cardField.add(defaultNums);

    const frameSize = new CardFieldFrameSize('4*4');
    const settings = new GameSettings();

    // timer.startTimer();
    this.element.appendChild(menu.element);
    this.element.appendChild(step.element);
    this.element.appendChild(timer.element);
    this.element.appendChild(cardField.element);
    this.element.appendChild(frameSize.element);
    this.element.appendChild(settings.element);
  }
}
