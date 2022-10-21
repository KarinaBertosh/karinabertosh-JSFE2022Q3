import './style.scss';
import { BaseComponent } from '../base-components';

export class Card extends BaseComponent {
  constructor(text: number, styleCard: string[] = []) {
    super('div', ['card'].concat(...styleCard));
    this.element.innerHTML = `${text || ''}`;
  }
}
