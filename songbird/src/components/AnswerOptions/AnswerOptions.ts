import './AnswerOptions.scss';
import { BaseComponent } from '../base-components';
import { AnswerOptionOne } from '../AnswerOptionOne/AnswerOptionOne';
import { IBird } from '../../type';

export class AnswerOptions extends BaseComponent {
  constructor(birds: IBird[], correctBird: string, getClickBird: (nameBird: string) => void) {
    super('ul', ['answer-options']);
    birds.forEach((bird: IBird) => {
      const li = new AnswerOptionOne(bird.name, correctBird, getClickBird);
      this.element.appendChild(li.element);
    });
  }
}
