import './style.scss';
import { BaseComponent } from '../base-components';

export class Button extends BaseComponent {
  constructor(text: string, styleButton: string[] = []) {
    super('button', ['button'].concat(styleButton));
    this.element.innerHTML = text;
  }
}
