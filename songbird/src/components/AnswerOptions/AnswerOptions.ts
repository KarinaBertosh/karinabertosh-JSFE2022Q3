import './AnswerOptions.scss';
import { BaseComponent } from '../base-components';

export interface IBird {
  id: number,
  name: string,
  species: string,
  description: string,
  image: string,
  audio: string,
}

export class AnswerOptions extends BaseComponent {
  constructor(birds: IBird[]) {
    super('ul', ['answer-options']);
    birds.forEach((bird: IBird) => {
      const row = document.createElement('li');
      const dot = document.createElement('div');
      const text = document.createElement('p');
      row.classList.add('bird-names');
      dot.classList.add('dot');
      row.appendChild(dot);
      row.appendChild(text);
      text.innerHTML = bird.name;
      this.element.appendChild(row);
    });
  }

  renderNameOptions(newBirds: any) {
    this.element.innerHTML = '';
    newBirds.forEach((bird: IBird) => {
      const row = document.createElement('li');
      row.classList.add('bird-names');
      row.innerHTML = bird.name;
      this.element.appendChild(row);
    });
  }
}
