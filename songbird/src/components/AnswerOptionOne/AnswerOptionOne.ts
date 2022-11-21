import { BaseComponent } from '../base-components';
import { IBird } from '../../type';
import { playAudio } from '../../helpers';
import { abc } from '../../store';
import './AnswerOptionOne.scss';

export class AnswerOptionOne extends BaseComponent {
  private dotColor;

  private nameBird;

  constructor(nameBird: string, correctBird: string, getClickBird: (nameBird: string, isCorrectBird: boolean) => void) {
    super('li', ['bird-names']);
    this.dotColor = 'grey';
    this.nameBird = nameBird;
    this.element.setAttribute('id', nameBird);

    this.element.addEventListener('click', () => {
      if (this.element.id === correctBird) {
        getClickBird(this.element.id, true);
        this.greenDot();
      } else {
        if (!abc.list.includes(this.nameBird)) {
          this.redDot();
        }
        getClickBird(this.element.id, false);
      }
    });

    this.render();
  }

  render() {
    this.element.innerHTML = `<div class="dot ${this.dotColor}"></div>${this.nameBird}`;
  }

  redDot() {
    this.dotColor = 'red';
    this.render();
  }

  greenDot() {
    this.dotColor = 'green';
    this.render();
  }
}
