import { BaseComponent } from './base-components';
import { ListQuestions } from './ListQuestions/ListQuestions';
import { СurrentQuestion } from './СurrentQuestion/СurrentQuestion';
import birdsData from '../constants';
import { abc } from '../store';
import { AnswerOptions } from './AnswerOptions/AnswerOptions';
import { NextLevelBtn } from './NextLevelBtn/NextLevelBtn';
import { Final } from './Final/Final';
import { ButtonRepeatGame } from './ButtonRepeatGame/ButtonRepeatGame';
import { IBird } from '../type';
import { Logo } from './Logo/Logo';
import { Score } from './Score/Score';
import { playAudio } from '../helpers';

export class App extends BaseComponent {
  private logo = new Logo();

  private currentList = 0;

  private correctBird = App.getRandomBird(birdsData[this.currentList]);

  private correctBirdIndex = birdsData[this.currentList].indexOf(this.correctBird);

  private listQuestions = new ListQuestions(this.currentList);

  private nextLevelBtn = new NextLevelBtn(false, () => this.nextStep());

  private buttonRepeatGame = new ButtonRepeatGame(() => this.restartGame());

  private currentQuestion = new СurrentQuestion(this.correctBirdIndex, this.correctBird, true);

  private currentAnswer = new СurrentQuestion(this.correctBirdIndex, this.correctBird, false, true, true, true);

  private score = new Score();

  private answerOptions = new AnswerOptions(
    birdsData[this.currentList],
    this.correctBird.name,
    (clickName: string, isCorrectBird: boolean) => this.getClickBird(clickName, isCorrectBird),
  );

  private final = new Final(this.score.get(), Score.getMax());

  constructor() {
    super('main', ['app']);
    this.renderGame();
  }

  getClickBird(nameBird: string, isCorrectBird: boolean) {
    this.currentAnswer.drawBird(nameBird, this.currentList);
    if (!abc.list.includes(nameBird)) {
      if (isCorrectBird) {
        this.score.plus(this.currentList);
        this.score.render();
        this.currentQuestion.renderCorrectAnswer(nameBird, this.currentList, this.correctBirdIndex);
        this.nextLevelBtn.render(true);
        const allCurrentNameBirds = birdsData[this.currentList].map((bird: IBird) => bird.name);
        abc.list = allCurrentNameBirds;
        playAudio('./true.mp3');
      } else {
        this.score.minus();
        abc.list.push(nameBird);
        playAudio('./false.mp3');
      }
    }
  }

  static getRandomBird(arr: IBird[]): any {
    const i = Math.floor(Math.random() * arr.length);
    const item = arr[i];
    return item;
  }

  nextStep(): void {
    abc.list = [];
    if (this.currentList < birdsData.length) {
      this.currentList += 1;
    }
    if (this.currentList === birdsData.length) {
      this.element.innerHTML = '';
      this.renderMenu();
      this.element.appendChild(this.listQuestions.element);
      this.final.render(this.score.get(), Score.getMax());
      this.element.appendChild(this.final.element);
      this.listQuestions.deleteClassActive();
      this.final.element.appendChild(this.buttonRepeatGame.element);
    }
    this.renderStep();
  }

  renderStep(): void {
    this.score.render();
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
    this.renderMenu();
    this.element.appendChild(this.listQuestions.element);
    this.element.appendChild(this.currentQuestion.element);
    const fieldQuiz = document.createElement('div');
    fieldQuiz.classList.add('field-quiz');
    fieldQuiz.appendChild(this.answerOptions.element);
    this.currentAnswer.element.classList.add('current-answer');
    fieldQuiz.appendChild(this.currentAnswer.element);
    this.element.appendChild(fieldQuiz);
    this.element.appendChild(this.nextLevelBtn.element);
  }

  restartGame(): void {
    abc.list = [];
    this.currentList = 0;
    this.score.set();
    this.renderGame();
    this.renderStep();
  }

  renderMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.appendChild(this.logo.element);
    menu.appendChild(this.score.element);
    this.element.appendChild(menu);
  }
}
