import './StartBtn.scss';
import { BaseComponent } from '../base-components';
import { ButtonListQuestions } from '../ButtonListQuestions/ButtonListQuestions';

export class StartBtn extends BaseComponent {
  private startNextStep;

  constructor(isActive = false, nextStep: () => void) {
    super('div', ['next-btn']);
    this.startNextStep = nextStep;
    this.render(isActive);
  }

  render(isActive: boolean) {
    this.element.innerHTML = '';
    const nextBtn = new ButtonListQuestions('Start', ['next-btn', isActive ? 'activated' : 'deactivated']);
    if (isActive) {
      nextBtn.element.addEventListener('click', () => this.startNextStep());
    }
    this.element.appendChild(nextBtn.element);
  }
}
