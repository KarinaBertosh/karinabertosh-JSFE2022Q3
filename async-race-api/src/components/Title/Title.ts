import { BaseComponent } from '../base-components';
import './style.scss';

export class Title extends BaseComponent {
  constructor(text: string, styleButton: string[] = []) {
    super('div', ['title'].concat(styleButton));
    this.element.innerHTML = text;
  }
}
