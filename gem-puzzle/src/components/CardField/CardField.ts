import './style.scss';
import { BaseComponent } from '../base-components';
import { Card } from '../Card/Card';

export class CardField extends BaseComponent {
  private cards: number[] = [];

  private count: () => void;

  private currantGameSize: number | undefined;

  constructor(countStep: () => void) {
    super('div', ['card-field']);
    this.count = countStep;
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  add(newCards: number[]): void {
    this.cards = newCards;
    this.cards.forEach((card: number) => {
      if (card !== 0) {
        const cardItem = new Card(card, [`card__size__${this.cards.length}`]);
        cardItem.element.addEventListener('click', (e) => this.handler(e.target));
        this.element.appendChild(cardItem.element);
      } else {
        const cardEmpty = new Card(card, ['empty-card', `card__size__${this.cards.length}`]);
        this.element.appendChild(cardEmpty.element);
      }
    });
  }

  renderFinishGame(): void {
    const steps = 1;
    const time = '10:10';
    this.element.innerHTML = `<div class='finish-game'>You are win! Steps: ${steps}, Time: ${time}</div>`;
  }

  handler(element: any): void {
    const num = element.textContent;
    this.renderNumbers(+num, element);
  }

  refreshGameSize(size: number): void {
    this.currantGameSize = size;
  }

  getCardSize(x: string): string {
    switch (this.currantGameSize) {
      case 9:
        return x === '-' ? '-133px' : '133px';
      case 16:
        return x === '-' ? '-100px' : '100px';
      case 25:
        return x === '-' ? '-80px' : '80px';
      case 36:
        return x === '-' ? '-66px' : '66px';
      case 49:
        return x === '-' ? '-57px' : '57px';
      case 64:
        return x === '-' ? '-50px' : '50px';
      default:
        return '100px';
    }
  }

  renderNumbers(num: number, element: any): void {
    const arr = this.cards;

    const result = [...arr];
    const lengthRow = Math.sqrt(arr.length);
    const indexEl = arr.indexOf(num);
    const indexElementRow = indexEl % lengthRow;

    if (arr[indexEl + 1] === 0 && indexElementRow !== (lengthRow - 1)) {
      result.splice(indexEl + 1, 1, num);
      result.splice(indexEl, 1, 0);
      element.style.left = this.getCardSize('+');
      this.count();
    } else if (arr[indexEl - 1] === 0 && indexElementRow !== 0) {
      result.splice(indexEl - 1, 1, num);
      result.splice(indexEl, 1, 0);
      element.style.left = this.getCardSize('-');
      this.count();
    } else if (arr[indexEl - lengthRow] === 0 && indexEl > lengthRow - 1) {
      result.splice(indexEl - lengthRow, 1, num);
      result.splice(indexEl, 1, 0);
      element.style.top = this.getCardSize('-');
      this.count();
    } else if (arr[indexEl + lengthRow] === 0) {
      result.splice(indexEl + lengthRow, 1, num);
      result.splice(indexEl, 1, 0);
      element.style.top = this.getCardSize('+');
      this.count();
    }

    if (CardField.isFinishGame(result)) {
      setTimeout(() => {
        this.clear();
        this.renderFinishGame();
      }, 300);
    } else {
      setTimeout(() => {
        this.clear();
        this.add(result);
      }, 300);
    }
  }

  static isFinishGame(cardNumbers: number[]): boolean {
    let err = '';
    for (let i = 0; i < cardNumbers.length; i++) {
      if (cardNumbers[i + 1]) {
        if (cardNumbers[i] > cardNumbers[i + 1]) {
          err = 'err';
        }
      }
    }
    return !err && cardNumbers[cardNumbers.length - 1] === 0;
  }
}
