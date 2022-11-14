import './СurrentQuestion.scss';
import { BaseComponent } from '../base-components';

export interface IBird {
  id: number,
  name: string,
  species: string,
  description: string,
  image: string,
  audio: string,
}

export class СurrentQuestion extends BaseComponent {
  constructor(bird: IBird, species = false, description = false) {
    super('div', ['current-question']);
    const field = document.createElement('div');
    const fieldDescription = document.createElement('div');
    const image = document.createElement('div');
    const name = document.createElement('div');
    const speciesBird = document.createElement('div');
    const audio = document.createElement('div');
    const descriptionBird = document.createElement('div');

    field.classList.add('field');
    fieldDescription.classList.add('field-description');
    image.classList.add('bird-image');
    name.classList.add('bird-name');
    speciesBird.classList.add('bird-species');
    audio.classList.add('bird-audio');
    descriptionBird.classList.add('bird-description');

    image.innerHTML = `<img class="bird-image" src=${bird.image}>`;
    name.innerHTML = `<div class="bird-name">${bird.name}<div/>`;
    speciesBird.innerHTML = `${species ? `<div>${bird.species}</div>` : ''}`;
    audio.innerHTML = `<audio id="audio" src="${bird.audio}" controls ></audio>`;
    descriptionBird.innerHTML = `${description ? `<div>${bird.description}</div>` : ''}`;

    this.element.appendChild(field);
    this.element.appendChild(fieldDescription);
    field.appendChild(image);
    field.appendChild(fieldDescription);
    fieldDescription.appendChild(name);
    fieldDescription.appendChild(speciesBird);
    fieldDescription.appendChild(audio);
    this.element.appendChild(descriptionBird);
  }
}
