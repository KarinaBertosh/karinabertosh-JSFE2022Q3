import { BaseComponent } from '../base-components';
import './ButtonListQuestions.scss';

export class ButtonListQuestions extends BaseComponent {
  constructor(text: string, styleButton: string[] = []) {
    super('button', ['button'].concat(styleButton));
    this.element.innerHTML = text;
  }
}
