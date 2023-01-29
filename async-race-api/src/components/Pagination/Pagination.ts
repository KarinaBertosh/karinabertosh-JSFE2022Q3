import { BaseComponent } from '../base-components';
import { Button } from '../Button/Button';
import './style.scss';

export class Pagination extends BaseComponent {
  private pagePagination = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() {
    super('div', ['pagination']);
    this.renderPagination(this.pagePagination);
  }

  renderPagination(pagePagination: number[]): void {
    pagePagination.map((el: number): void => {
      const btn = new Button(`${el}`, ['btn-pagination', 'white']);
      this.element.appendChild(btn.element);
    });
  }
}
