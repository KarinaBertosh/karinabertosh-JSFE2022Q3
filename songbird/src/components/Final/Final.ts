import { BaseComponent } from '../base-components';
import './Final.scss';

export class Final extends BaseComponent {
  constructor() {
    super('div', ['finish']);
    this.element.innerHTML = `<h1 class='congratulations'>Поздравляем!</h1>
    <p>Вы прошли викторину и набрали 0 из 30 возможных баллов </p>`;
  }
}
