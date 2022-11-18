import { BaseComponent } from '../base-components';
import { Logo } from '../Logo/Logo';
import { Score } from '../Score/Score';
import './Menu.scss';

export class Menu extends BaseComponent {
  private logo = new Logo();

  private score = new Score();

  constructor() {
    super('div', ['menu']);
    this.element.appendChild(this.logo.element);
    this.element.appendChild(this.score.element);
  }
}
