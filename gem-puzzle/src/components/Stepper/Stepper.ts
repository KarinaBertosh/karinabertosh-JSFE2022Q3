import './style.scss';
import { BaseComponent } from '../base-components';

export class Stepper extends BaseComponent {
  private numberStep = 0;

  constructor() {
    super('div', ['stepper']);
    this.element.innerHTML = `     
    <p>Moves:</p>
    <p>0</p>
   `;
  }

  plusStep(): void {
    this.numberStep += 1;
    this.rerender();
  }

  clearStep(): void {
    this.numberStep = 0;
    this.rerender();
  }

  rerender(): void {
    this.element.innerHTML = `     
    <p>Moves:</p>
    <p>${this.numberStep}</p>
   `;
  }

  getSteps(): number {
    return this.numberStep;
  }
}
