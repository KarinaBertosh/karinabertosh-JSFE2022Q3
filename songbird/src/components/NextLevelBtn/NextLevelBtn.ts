import './NextLevelBtn.scss';
import { BaseComponent } from '../base-components';
import { ButtonListQuestions } from '../ButtonListQuestions/ButtonListQuestions';

export interface IBird {
  id: number,
  name: string,
  species: string,
  description: string,
  image: string,
  audio: string,
}

export class NextLevelBtn extends BaseComponent {
  constructor() {
    super('div', ['next-btn']);
    const nextBtn = new ButtonListQuestions('Next Level', ['next-btn']);
    this.element.appendChild(nextBtn.element);
  }
}
