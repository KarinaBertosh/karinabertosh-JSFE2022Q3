import { BaseComponent } from './base-components';
import { Menu } from './Menu/Menu';
import { ListQuestions } from './ListQuestions/ListQuestions';
import { СurrentQuestion } from './СurrentQuestion/СurrentQuestion';
import birdsData from '../constants';
import { AnswerOptions } from './AnswerOptions/AnswerOptions';
import { NextLevelBtn } from './NextLevelBtn/NextLevelBtn';

export class App extends BaseComponent {
  private menu = new Menu();

  private listQuestions = new ListQuestions();

  private nextLevelBtn = new NextLevelBtn();

  private currentQuestion = new СurrentQuestion(birdsData[0][0]);

  private currentAnswer = new СurrentQuestion(birdsData[0][0], true, true);

  private answerOptions = new AnswerOptions(birdsData[0]);

  constructor() {
    super('main', ['app']);

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
}
