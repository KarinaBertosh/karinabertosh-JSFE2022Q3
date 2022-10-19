import './style.scss';
import { BaseComponent } from '../base-components';

export class Card extends BaseComponent {
  constructor(text: number, styleButton: string[] = []) {
    super('div', ['card'].concat(...styleButton));
    this.element.innerHTML = `${text || ''}`;
  }
}
