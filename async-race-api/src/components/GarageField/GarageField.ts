import { BaseComponent } from '../base-components';
import { Title } from '../Title/Title';
import { CarField } from '../CarField/CarField';
import { Pagination } from '../Pagination/Pagination';
import { db } from '../data';
import './style.scss';

export class GarageField extends BaseComponent {
  private titleField = new Title('Garage');

  private page = new Title('Page #1', ['small']);

  private pagination = new Pagination();

  constructor() {
    super('div', ['garage__field']);
    this.element.appendChild(this.titleField.element);
    this.element.appendChild(this.page.element);
    this.renderCars(db.garage);
    this.element.appendChild(this.pagination.element);
  }

  renderCars(arr: any): void {
    arr.map((el: any) => {
      const carField = new CarField(`${el.name}`, `${el.color}`);
      this.element.appendChild(carField.element);
    });
  }
}
