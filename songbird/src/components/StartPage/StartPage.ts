import { BaseComponent } from '../base-components';
import './StartPage.scss';

export class StartPage extends BaseComponent {
  constructor() {
    super('div', ['start-page']);
    this.element.innerHTML = `<p class="welcome-text">Привет! <br>
    Чтобы начать викторину нажми кнопку "Start"</p>`;
  }
}
