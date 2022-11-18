import { BaseComponent } from './base-components';
import { Menu } from './Menu/Menu';
import { ListQuestions } from './ListQuestions/ListQuestions';
import { СurrentQuestion } from './СurrentQuestion/СurrentQuestion';
import birdsData from '../constants';
import { AnswerOptions } from './AnswerOptions/AnswerOptions';
import { NextLevelBtn } from './NextLevelBtn/NextLevelBtn';
import { IBird } from '../type';

export class App extends BaseComponent {
  private menu = new Menu();

  private currentList = 0;

  private correctBird = this.getRandomBird(birdsData[0]);

  private correctBirdIndex = birdsData[0].indexOf(this.correctBird);

  private listQuestions = new ListQuestions();

  private nextLevelBtn = new NextLevelBtn(true);

  private currentQuestion = new СurrentQuestion(this.correctBirdIndex, this.correctBird, true);

  private currentAnswer = new СurrentQuestion(this.correctBirdIndex, this.correctBird, false, true, true, true);

  private answerOptions = new AnswerOptions(birdsData[0], this.correctBird.name, (clickName: string) => this.getClickBird(clickName));

  private birdsData = birdsData[0];

  constructor() {
    super('main', ['app']);
    console.log(this.correctBird);
    
    this.element.appendChild(this.menu.element);
    this.element.appendChild(this.listQuestions.element);
    this.element.appendChild(this.currentQuestion.element);
    const fieldQuiz = document.createElement('div');
    fieldQuiz.classList.add('field-quiz');
    // this.answerOptions.renderLi(birdsData[0]);
    fieldQuiz.appendChild(this.answerOptions.element);
    fieldQuiz.appendChild(this.currentAnswer.element);
    this.element.appendChild(fieldQuiz);
    this.element.appendChild(this.nextLevelBtn.element);
    console.log(this.correctBird.name);
  }

  getClickBird(nameBird: string) {
    this.currentAnswer.drawBird(nameBird, this.currentList);
    this.finishStep(nameBird);
  }

  finishStep(nameBird: string) {
    if (this.correctBird.name === nameBird) {
      // to do: activate button
      this.currentQuestion.renderCorrectAnswer(nameBird, this.currentList, this.correctBirdIndex);
    }
  }

  getRandomBird(arr: IBird[]): any {
    const i = Math.floor(Math.random() * arr.length);
    const item = arr[i];
    return item;
  }
}
