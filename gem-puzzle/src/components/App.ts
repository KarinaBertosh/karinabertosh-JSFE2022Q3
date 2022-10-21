import { BaseComponent } from './base-components';
import { CardField } from './CardField/CardField';
import { CardFieldFrameSize } from './CardFieldFrameSize/CardFieldFrameSize';
import { Menu } from './Menu/Menu';
import { GameSettings } from './GameSettings/GameSettings';
import { Stepper } from './Stepper/Stepper';
import { Timer } from './Timer/Timer';

export class App extends BaseComponent {
  private sizeField = 16;

  private cardFieldFrameSize: CardFieldFrameSize = new CardFieldFrameSize(`${Math.sqrt(this.sizeField)} * ${Math.sqrt(this.sizeField)}`);

  private settings: GameSettings = new GameSettings(this.sizeField);

  private stepper: Stepper = new Stepper();

  private cardField: CardField = new CardField(() => this.countStep());

  constructor() {
    super('main', ['app']);

    const menu = new Menu();
    const timer = new Timer();
    this.cardField.refreshGameSize(this.sizeField);
    menu.element.childNodes.forEach((btn) => {
      btn.addEventListener('click', (e) => this.handlerMenu(e.target));
    });

    this.cardField.add(this.shuffle());

    this.settings.element.childNodes.forEach((btn) => {
      btn.addEventListener('click', (e) => this.handlerSettings(e.target));
    });

    this.element.appendChild(menu.element);
    this.element.appendChild(this.stepper.element);
    this.element.appendChild(timer.element);
    this.element.appendChild(this.cardField.element);
    this.element.appendChild(this.cardFieldFrameSize.element);
    this.element.appendChild(this.settings.element);
  }

  handlerSettings(el: any): void {
    const count = +el.textContent[0];
    if (typeof count === 'number') {
      this.sizeField = count ** 2;
      this.cardFieldFrameSize.changeFrameSizeText(`${Math.sqrt(this.sizeField)} * ${Math.sqrt(this.sizeField)}`);
    }
    this.cardField.clear();
    this.cardField.add(this.shuffle());
    this.cardField.refreshGameSize(this.sizeField);

    const allSettings: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');

    allSettings.forEach((btn: HTMLButtonElement) => {
      btn.classList.remove('active');
    });
    el.classList.add('active');
    this.stepper.clearStep();
  }

  handlerMenu(el: any): void {
    if (el.textContent === 'Shuffle and start') {
      this.cardField.clear();
      this.cardField.add(this.shuffle());
      this.stepper.clearStep();
    }
  }

  shuffle(): number[] {
    const newNumbers = Array.from(Array(this.sizeField).keys());
    return newNumbers.sort(() => Math.random() - 0.5);
  }

  countStep(): void {
    this.stepper.plusStep();
  }

  // stopGame(totalArr: number[]): string {

  // }
}
