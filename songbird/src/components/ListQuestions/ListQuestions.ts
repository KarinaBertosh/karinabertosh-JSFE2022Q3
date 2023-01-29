import './ListQuestions.scss';
import { BaseComponent } from '../base-components';
import { ButtonListQuestions } from '../ButtonListQuestions/ButtonListQuestions';

export class ListQuestions extends BaseComponent {
  private listMenu = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

  constructor(numList: number) {
    super('div', ['list-questions']);
    this.render(numList);
  }

  render(numList: number): void {
    this.element.innerHTML = '';
    this.listMenu.forEach((item: string, index) => {
      const itemMenu = new ButtonListQuestions(item, [index === numList ? 'active' : 'default']);
      this.element.appendChild(itemMenu.element);
    });
  }

  deleteClassActive(): void {
    this.render(-1);
  }
}
