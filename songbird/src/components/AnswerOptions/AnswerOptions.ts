import './AnswerOptions.scss';
import { BaseComponent } from '../base-components';
import { AnswerOptionOne } from '../AnswerOptionOne/AnswerOptionOne';
import { IBird } from '../../type';

export class AnswerOptions extends BaseComponent {
  private getClickBird;

  constructor(birds: IBird[], correctBird: string, getClickBird: (nameBird: string) => void) {
    super('ul', ['answer-options']);
    this.getClickBird = getClickBird;
    this.render(birds, correctBird);
  }

  render(birds: IBird[], correctBird: string) {
    this.element.innerHTML = '';
    birds.forEach((bird: IBird) => {
      const li = new AnswerOptionOne(bird.name, correctBird, this.getClickBird);
      this.element.appendChild(li.element);
    });
  }
}
