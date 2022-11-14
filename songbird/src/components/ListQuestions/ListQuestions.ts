import './ListQuestions.scss';
import { BaseComponent } from '../base-components';
import { ButtonListQuestions } from '../ButtonListQuestions/ButtonListQuestions';



export class ListQuestions extends BaseComponent {
  // private buttonListQuestions = new ButtonListQuestions();
  constructor() {
    super('div', ['list-questions']);
    const warmUpBtn = new ButtonListQuestions('Разминка');
    const passerinesBtn = new ButtonListQuestions('Воробьиные');
    const forestBtn = new ButtonListQuestions('Лесные птицы');
    const choristersBtn = new ButtonListQuestions('Певчие птицы');
    const predatoryBtn = new ButtonListQuestions('Хищные птицы');
    const maritimeBtn = new ButtonListQuestions('Морские птицы');

    this.element.appendChild(warmUpBtn.element);
    this.element.appendChild(passerinesBtn.element);
    this.element.appendChild(forestBtn.element);
    this.element.appendChild(choristersBtn.element);
    this.element.appendChild(predatoryBtn.element);
    this.element.appendChild(maritimeBtn.element);
  }
}
