import { BaseComponent } from '../../base-components';
import { Title } from '../../Title/Title';
import { Button } from '../../Button/Button';
import { db } from '../../data';
import { IOneCarInWinners } from '../../type';
import { Pagination } from '../../Pagination/Pagination';
import './style.scss';

export class WinnersPage extends BaseComponent {
  private winnersTitle = new Title('WINNERS (0)');

  private winnersTitlePage = new Title('PAGE #1', ['small']);

  private pagination = new Pagination();

  constructor() {
    super('div', ['winners__page']);
    this.renderTable(db.winners);
    this.element.appendChild(this.pagination.element);
  }

  renderTable(arr: IOneCarInWinners[]): void {
    const tableWinners = document.createElement('div');
    const tableTitleWinners = document.createElement('div');
    const numberWinners = document.createElement('div');
    const carWinners = document.createElement('div');
    const nameWinners = document.createElement('div');
    const bestTimeWinners = document.createElement('div');
    const footerBtnWinners = document.createElement('div');
    const prevBtn = new Button('PREV');
    const nextBtn = new Button('NEXT');

    tableWinners.className = 'table';
    tableTitleWinners.className = 'table__titles';
    numberWinners.className = 'table__title';
    carWinners.className = 'table__title';
    nameWinners.className = 'table__title';
    bestTimeWinners.className = 'table__title';
    footerBtnWinners.className = 'table__footer';
    numberWinners.textContent = 'Number';
    carWinners.textContent = 'Car';
    nameWinners.textContent = 'Name';
    bestTimeWinners.textContent = 'Best time';

    arr.map((el: IOneCarInWinners) => {
      const currentNumberWinners = document.createElement('div');
      const currentTimeWinners = document.createElement('div');

      currentNumberWinners.className = 'current-winners';
      currentTimeWinners.className = 'current-winners';

      currentNumberWinners.textContent = `${el.id}`;
      currentTimeWinners.textContent = `${el.time}`;

      numberWinners.appendChild(currentNumberWinners);
      bestTimeWinners.appendChild(currentTimeWinners);
    });

    this.element.appendChild(this.winnersTitle.element);
    this.element.appendChild(this.winnersTitlePage.element);
    this.element.appendChild(tableWinners);
    tableWinners.appendChild(tableTitleWinners);
    tableTitleWinners.appendChild(numberWinners);
    tableTitleWinners.appendChild(carWinners);
    tableTitleWinners.appendChild(nameWinners);
    tableTitleWinners.appendChild(bestTimeWinners);
    this.element.appendChild(footerBtnWinners);
    footerBtnWinners.appendChild(prevBtn.element);
    footerBtnWinners.appendChild(nextBtn.element);
  }
}
