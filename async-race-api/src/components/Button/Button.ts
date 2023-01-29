import { BaseComponent } from '../base-components';
import './style.scss';

export class Button extends BaseComponent {
  constructor(text: string, styleButton: string[] = []) {
    super('button', ['button'].concat(styleButton));
    this.element.innerHTML = text;
  }
}
