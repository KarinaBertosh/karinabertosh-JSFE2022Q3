import { BaseComponent } from './base-components';
import { Menu } from './Menu/Menu';
import { ListQuestions } from './ListQuestions/ListQuestions';
import { СurrentQuestion } from './СurrentQuestion/СurrentQuestion';
import birdsData from '../constants';
import { AnswerOptions } from './AnswerOptions/AnswerOptions';
import { NextLevelBtn } from './NextLevelBtn/NextLevelBtn';
import { Final } from './Final/Final';
import { ButtonRepeatGame } from './ButtonRepeatGame/ButtonRepeatGame';

import { IBird } from '../type';

export class App extends BaseComponent {
  private menu = new Menu();

  private currentList = 0;

  private correctBird = App.getRandomBird(birdsData[this.currentList]);

  private correctBirdIndex = birdsData[this.currentList].indexOf(this.correctBird);

  private listQuestions = new ListQuestions(this.currentList);

  private nextLevelBtn = new NextLevelBtn(false, () => this.nextStep());

  private buttonRepeatGame = new ButtonRepeatGame(() => this.restartGame());

  private currentQuestion = new СurrentQuestion(this.correctBirdIndex, this.correctBird, true);

  private currentAnswer = new СurrentQuestion(this.correctBirdIndex, this.correctBird, false, true, true, true);

  private answerOptions = new AnswerOptions(birdsData[this.currentList], this.correctBird.name, (clickName: string) => this.getClickBird(clickName));

  private birdsData = birdsData[this.currentList];

  private final = new Final();

  constructor() {
    super('main', ['app']);
    this.renderGame();
  }

  getClickBird(nameBird: string) {
    this.currentAnswer.drawBird(nameBird, this.currentList);
    this.finishStep(nameBird);
  }

  finishStep(nameBird: string) {
    if (this.correctBird.name === nameBird) {
      this.currentQuestion.renderCorrectAnswer(nameBird, this.currentList, this.correctBirdIndex);
      this.nextLevelBtn.render(true);
    }
  }

  static getRandomBird(arr: IBird[]): any {
    const i = Math.floor(Math.random() * arr.length);
    const item = arr[i];
    return item;
  }

  nextStep(): void {
    this.currentList += 1;
    if (this.currentList === birdsData.length) {
      this.element.innerHTML = '';
      this.element.appendChild(this.menu.element);
      this.element.appendChild(this.listQuestions.element);
      this.element.appendChild(this.final.element);
      this.listQuestions.deleteClassActive();
      this.final.element.appendChild(this.buttonRepeatGame.element);
    }
    this.renderStep();
  }

  renderStep(): void {
    this.correctBird = App.getRandomBird(birdsData[this.currentList]);
    this.correctBirdIndex = birdsData[this.currentList].indexOf(this.correctBird);
    this.currentQuestion.renderComponent(this.correctBird, true);
    this.currentAnswer.renderComponent(this.correctBird, false, true, true, true);
    this.answerOptions.render(birdsData[this.currentList], this.correctBird.name);
    this.listQuestions.render(this.currentList);
    this.nextLevelBtn.render(false);
  }

  renderGame(): void {
    this.element.innerHTML = '';
    this.element.appendChild(this.menu.element);
    this.element.appendChild(this.listQuestions.element);
    this.element.appendChild(this.currentQuestion.element);
    const fieldQuiz = document.createElement('div');
    fieldQuiz.classList.add('field-quiz');
    fieldQuiz.appendChild(this.answerOptions.element);
    fieldQuiz.appendChild(this.currentAnswer.element);
    this.element.appendChild(fieldQuiz);
    this.element.appendChild(this.nextLevelBtn.element);
  }

  restartGame(): void {
    this.currentList = 0;
    this.renderGame();
    this.renderStep();
  }
}
