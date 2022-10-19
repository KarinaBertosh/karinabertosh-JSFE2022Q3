import './style.scss';
import { BaseComponent } from '../base-components';
import { Card } from '../card/card';

export class CardField extends BaseComponent {
  private cards: number[] = [];

  constructor() {
    super('div', ['card-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  add(newCards: number[]): void {
    this.cards = newCards;
    this.cards.forEach((card: number) => {
      if (card !== 0) {
        const cardItem = new Card(card);
        cardItem.element.addEventListener('click', (e) => this.handler(e.target));
        this.element.appendChild(cardItem.element);
      } else {
        const cardEmpty = new Card(card, ['empty-card']);
        this.element.appendChild(cardEmpty.element);
      }
    });
  }

  handler(element: any): void {
    const num = element.textContent;
    this.renderNumbers(+num);
  }

  renderNumbers(element: number): void {
    const arr = this.cards;

    const result = [...arr];
    const lengthRow = Math.sqrt(arr.length);
    const indexEl = arr.indexOf(element);
    const indexElementRow = indexEl % lengthRow;
    if (arr[indexEl + 1] === 0 && indexElementRow !== (lengthRow - 1)) {
      result.splice(indexEl + 1, 1, element);
      result.splice(indexEl, 1, 0);
    } else if (arr[indexEl - 1] === 0 && indexElementRow !== 0) {
      result.splice(indexEl - 1, 1, element);
      result.splice(indexEl, 1, 0);
    } else if (arr[indexEl - lengthRow] === 0 && indexEl > lengthRow - 1) {
      result.splice(indexEl - lengthRow, 1, element);
      result.splice(indexEl, 1, 0);
    } else if (arr[indexEl + lengthRow] === 0) {
      result.splice(indexEl + lengthRow, 1, element);
      result.splice(indexEl, 1, 0);
    }
    this.clear();
    this.add(result);
  }
}
