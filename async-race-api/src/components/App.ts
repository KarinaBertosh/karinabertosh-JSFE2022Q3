import { BaseComponent } from './base-components';
import { Button } from './Button/Button';
import { GaragePage } from './pages/GaragePage/GaragePage';
import { WinnersPage } from './pages/WinnersPage/GaragePage';

export class App extends BaseComponent {
  private openGaragePageBtn = new Button('TO GARAGE');

  private openWinnersPageBtn = new Button('TO WINNERS');

  private garagePage = new GaragePage();

  private winnersPage = new WinnersPage();

  constructor() {
    super('main', ['app']);
    this.renderHeader();
    this.openGaragePageBtn.element.addEventListener('click', () => this.openGaragePage());
    this.openWinnersPageBtn.element.addEventListener('click', () => this.openWinnersPage());
    this.openGaragePage();
  }

  renderHeader(): void {
    const header = document.createElement('div');
    header.className = 'header';
    this.element.appendChild(header);
    header.appendChild(this.openGaragePageBtn.element);
    header.appendChild(this.openWinnersPageBtn.element);
  }

  openGaragePage(): void {
    this.clear();
    this.renderHeader();
    this.element.appendChild(this.garagePage.element);
  }

  openWinnersPage(): void {
    this.clear();
    this.renderHeader();
    this.element.appendChild(this.winnersPage.element);
  }

  clear(): void {
    this.element.innerHTML = '';
  }
}
