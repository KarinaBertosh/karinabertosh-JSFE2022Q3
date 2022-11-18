import { BaseComponent } from '../base-components';
import birdsData from '../../constants';
import { IBird } from '../../type';
import './СurrentQuestion.scss';

export class СurrentQuestion extends BaseComponent {
  private birdsData = birdsData;

  constructor(correctBirdIndex: number, bird: IBird, isHiddenBird = false, isSpecies = false, isDescription = false, onlyHelpText = false) {
    super('div', ['current-question']);
    this.renderComponent(bird, isHiddenBird, isSpecies, isDescription, onlyHelpText);
  }

  clear(): void {
    this.element.innerHTML = '';
  }

  renderComponent(
    bird: IBird,
    isHiddenBird = false,
    isSpecies = false,
    isDescription = false,
    onlyHelpText = false,
  ): void {
    this.clear();
    if (onlyHelpText) {
      this.element.innerHTML = `<p class='deactivate'>
      Послушайте плеер. Выберите птицу из списка
      <p/>`;
    } else {
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

      image.innerHTML = `<img class="bird-image" src=${isHiddenBird
        ? 'https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg'
        : bird.image}>`;
      name.innerHTML = `<div class="bird-name">${isHiddenBird ? '******' : bird.name}<div/>`;
      speciesBird.innerHTML = `${isSpecies ? `<div>${bird.species}</div>` : ''}`;
      audio.innerHTML = `<audio id="audio" src="${bird.audio}" controls ></audio>`;
      descriptionBird.innerHTML = `${isDescription ? `<div class='bird-description'>${bird.description}</div>` : ''}`;

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

  drawBird(nameBird: string, numList = 0): void {
    this.clear();
    const indexBird = birdsData[numList].findIndex((el) => el.name === nameBird);
    const renderBird = birdsData[numList][indexBird];
    this.renderComponent(renderBird, false, true, true);
  }

  renderCorrectAnswer(nameBird: string, numList = 0, correctBirdIndex: number): void {
    const indexBird = birdsData[numList].findIndex((el) => el.name === nameBird);
    const renderBird = birdsData[numList][indexBird];
    if (birdsData[numList][correctBirdIndex].name === renderBird.name) {
      this.clear();
      this.renderComponent(renderBird, false);
    }
  }
}
