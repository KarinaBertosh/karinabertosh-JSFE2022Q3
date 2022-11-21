import { BaseComponent } from '../base-components';
import birdsData from '../../constants';
import './Final.scss';

export class Final extends BaseComponent {
  constructor(getScore: number, maxScore: number) {
    super('div', ['finish']);
    this.render(getScore, maxScore);
  }

  render(getScore: number, maxScore: number) {
    if (getScore === maxScore) {
      this.element.innerHTML = `<h1 class='congratulations'>ОГО!</h1>
      <p>Вы прошли викторину и набрали максимум баллов! ${getScore} из ${maxScore} возможных баллов </p>`;
    } else {
      this.element.innerHTML = `<h1 class='congratulations'>Поздравляем!</h1>
      <p>Вы прошли викторину и набрали ${getScore} из ${maxScore} возможных баллов </p>`;
    }
  }
}
