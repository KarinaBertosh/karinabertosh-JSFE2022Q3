import { BaseComponent } from '../base-components';
import birdsData from '../../constants';
import './Score.scss';

export class Score extends BaseComponent {
  private currentScore = 0;

  constructor() {
    super('div', ['score']);
    this.element.innerHTML = `Score: ${this.currentScore}`;
  }

  render() {
    this.element.innerHTML = `Score: ${this.currentScore}`;
  }

  plus(currentList: number) {
    this.currentScore += birdsData[currentList].length - 1;
  }

  minus() {
    this.currentScore -= 1;
  }

  get() {
    return this.currentScore;
  }

  set() {
    this.currentScore = 0;
    this.render();
  }

  static getMax() {
    let result = 0;
    birdsData.forEach((colection) => {
      result += colection.length - 1;
    });
    return result;
  }
}
