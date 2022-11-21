import { BaseComponent } from '../base-components';
import './Score.scss';

export class Score extends BaseComponent {
  constructor(score: number) {
    super('div', ['score']);
    this.element.innerHTML = `Score: ${score}`;
  }

  render(newScore: number) {
    this.element.innerHTML = `Score: ${newScore}`;
  }
}
