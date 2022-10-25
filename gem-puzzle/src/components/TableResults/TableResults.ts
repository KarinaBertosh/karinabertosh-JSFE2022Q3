import './style.scss';
import { BaseComponent } from '../base-components';

interface IResult {
  steps: string,
  time: string,
  typeGame: string,
}

export class TableResults extends BaseComponent {
  constructor() {
    super('div', ['table-results']);
    this.element.innerHTML = '<div class="no-results">No results</div>';
  }

  renderTable(results: IResult[] | null): void {
    this.element.innerHTML = '';
    if (results) {
      results.forEach((result) => {
        const row = document.createElement('div');
        row.classList.add('table_row');

        const step = document.createElement('div');
        step.innerHTML = `Steps: ${result.steps}`;
        const time = document.createElement('div');
        time.innerHTML = `Time: ${result.time}`;
        const typeGame = document.createElement('div');
        typeGame.innerHTML = `Type game: ${result.typeGame}`;

        row.appendChild(step);
        row.appendChild(time);
        row.appendChild(typeGame);
        this.element.appendChild(row);
      });
    }
    // `<div class="table_row">${result.step}</div>`
  }
}
