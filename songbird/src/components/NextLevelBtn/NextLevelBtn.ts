import './NextLevelBtn.scss';
import { BaseComponent } from '../base-components';
import { ButtonListQuestions } from '../ButtonListQuestions/ButtonListQuestions';

export class NextLevelBtn extends BaseComponent {
  constructor(isDeactivated = false) {
    super('div', ['next-btn']);
    const nextBtn = new ButtonListQuestions('Next Level', ['next-btn', isDeactivated ? 'deactivated' : 'activated']);
    this.element.appendChild(nextBtn.element);
  }

  // activatedBtn() {
  //   this.element.classList.remove('deactivated');
  //   this.element.classList.add('activated');
  // }
}
