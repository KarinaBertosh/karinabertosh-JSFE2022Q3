import { BaseComponent } from '../base-components';
import { IBird } from '../../type';
import { playAudio } from '../../helpers';
// import { puplic } from '../../../public/true.mp3';
import './AnswerOptionOne.scss';

export class AnswerOptionOne extends BaseComponent {
  private dotColor;

  private nameBird;

  constructor(nameBird: string, correctBird: string, getClickBird: (nameBird: string) => void) {
    super('li', ['bird-names']);
    this.dotColor = 'grey';
    this.nameBird = nameBird;
    this.element.setAttribute('id', nameBird);

    this.element.addEventListener('click', () => {
      getClickBird(this.element.id);
      if (this.element.id === correctBird) {
        // to do add links to audio
        playAudio('../true.mp3');
        this.greenDot();
      } else {
        playAudio('../false.mp3');
        this.redDot();
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
