import './ButtonListQuestions.scss';
import { BaseComponent } from '../base-components';


export class ButtonListQuestions extends BaseComponent {
  constructor(text: string, styleButton: string[] = []) {
    super('button', ['button'].concat(styleButton));
    this.element.innerHTML = text;
  }
}