import { BaseComponent } from './base-components';
import { CardField } from './CardField/CardField';
import { CardFieldFrameSize } from './CardFieldFrameSize/CardFieldFrameSize';
import { Menu } from './Menu/Menu';
import { GameSettings } from './GameSettings/GameSettings';
import { Stepper } from './Stepper/Stepper';
import { Timer } from './Timer/Timer';
import { SoundBtn } from './SoundBtn/SoundBtn';
import { TableResults } from './TableResults/TableResults';
import { Button } from './Button/Button';

const KEY_LS = 'bastResult';

interface IResult {
  steps: string,
  time: string,
  typeGame: string,
}

export class App extends BaseComponent {
  private sizeField = 16;

  private cardFieldFrameSize: CardFieldFrameSize = new CardFieldFrameSize(`${Math.sqrt(this.sizeField)} * ${Math.sqrt(this.sizeField)}`);

  private settings: GameSettings = new GameSettings(this.sizeField);

  private stepper: Stepper = new Stepper();

  private timer: Timer = new Timer();

  private cardField: CardField = new CardField(() => this.countStep(), () => this.renderFinishGame());

  private menu = new Menu();

  private soundBtn = new SoundBtn();

  private tableResults = new TableResults();

  constructor() {
    super('main', ['app']);

    this.cardField.refreshGameSize(this.sizeField);
    this.menu.element.childNodes.forEach((btn) => {
      btn.addEventListener('click', (e) => this.handlerMenu(e.target));
    });

    this.cardField.add(this.shuffle());

    this.settings.element.childNodes.forEach((btn) => {
      btn.addEventListener('click', (e) => this.handlerSettings(e.target));
    });

    this.soundBtn.element.addEventListener('click', () => this.changeSound());

    this.timer.startTimer();
    this.element.appendChild(this.menu.element);
    this.element.appendChild(this.soundBtn.element);
    this.element.appendChild(this.stepper.element);
    this.element.appendChild(this.timer.element);
    this.element.appendChild(this.cardField.element);
    this.element.appendChild(this.cardFieldFrameSize.element);
    this.element.appendChild(this.settings.element);
  }

  handlerSettings(el: any): void {
    if (this.checkSoundOn()) {
      App.playAudio('./step.mp3');
    }
    const count = +el.textContent[0];
    if (typeof count === 'number') {
      this.sizeField = count ** 2;
      this.cardFieldFrameSize.changeFrameSizeText(`${Math.sqrt(this.sizeField)} * ${Math.sqrt(this.sizeField)}`);
    }
    this.cardField.clear();
    this.cardField.add(this.shuffle());
    this.cardField.refreshGameSize(this.sizeField);

    const allSettings: NodeListOf<HTMLButtonElement> = document.querySelectorAll('button');

    allSettings.forEach((btn: HTMLButtonElement) => {
      btn.classList.remove('active');
    });
    el.classList.add('active');
    this.stepper.clearStep();
    this.timer.stopTimer();
    this.timer.startTimer();
  }

  handlerMenu(el: any): void {
    if (this.checkSoundOn()) {
      App.playAudio('./step.mp3');
    }
    if (el.textContent === 'Shuffle and start') {
      this.cardField.clear();
      this.cardField.add(this.shuffle());
      this.stepper.clearStep();
      this.timer.stopTimer();
      this.timer.startTimer();
    }
    if (el.textContent === 'Results') {
      console.log(1);
      this.cardField.clear();
      this.openTableResult();
      this.timer.timerZero();
      this.timer.stopTimer();
    }
  }

  shuffle(): number[] {
    const newNumbers = Array.from(Array(this.sizeField).keys());
    return newNumbers.sort(() => Math.random() - 0.5);
  }

  countStep(): void {
    if (this.checkSoundOn()) {
      App.playAudio('./card.wav');
    }
    this.stepper.plusStep();
  }

  renderFinishGame(): void {
    if (this.checkSoundOn()) {
      App.playAudio('./win.mp3');
    }
    this.cardField.element.innerHTML = `<div class='finish-game'>
    You are win! Steps: <span>${this.stepper.getSteps()} </span>, Time: <span>${this.timer.getTime()}</span>
    </div>`;
    this.timer.stopTimer();
    this.localStorage();
  }

  static playAudio(soundSrc: string): void {
    const audio = new Audio();
    audio.src = soundSrc;
    audio.currentTime = 0;
    audio.play();
  }

  changeSound(): void {
    this.soundBtn.changeSoundBtn();
  }

  checkSoundOn(): boolean {
    return this.soundBtn.getSoundButtonText() === 'Sound ON';
  }

  localStorage(): void {
    const newResult = {
      steps: this.stepper.getSteps(),
      time: this.timer.getTime(),
      typeGame: `${Math.sqrt(this.sizeField)} * ${Math.sqrt(this.sizeField)}`,
    };
    const getData = localStorage.getItem(KEY_LS);
    let sendData = [];
    if (getData && getData.length) {
      sendData = [...JSON.parse(getData), newResult];
    } else {
      sendData = [newResult];
    }
    sendData.sort((a, b) => ((a.steps > b.steps) ? 1 : ((b.steps > a.steps) ? -1 : 0)));
    localStorage.setItem(KEY_LS, JSON.stringify(sendData.slice(0, 10)));
  }

  openTableResult(): void {
    this.cardField.element.innerHTML = '';
    const getData = localStorage.getItem(KEY_LS);
    if (getData) {
      this.tableResults.renderTable(JSON.parse(getData));
    }
    this.cardField.element.appendChild(this.tableResults.element);
  }
}
