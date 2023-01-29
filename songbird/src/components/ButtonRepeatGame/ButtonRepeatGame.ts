import { BaseComponent } from '../base-components';
import { ButtonListQuestions } from '../ButtonListQuestions/ButtonListQuestions';
import './ButtonRepeatGame.scss';

export class ButtonRepeatGame extends BaseComponent {
  constructor(startGame: () => void) {
    super('div', ['repeat-btn']);
    const repeatBtn = new ButtonListQuestions('Попробовать ещё раз!', ['repeat-btn']);
    this.element.addEventListener('click', () => startGame());
    this.element.appendChild(repeatBtn.element);
  }
}
