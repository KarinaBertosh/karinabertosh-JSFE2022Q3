import { BaseComponent } from '../base-components';
import { Title } from '../Title/Title';
import { CarField } from '../CarField/CarField';
import { Pagination } from '../Pagination/Pagination';
import './style.scss';
import { IOneCarInGarage } from '../type';
import { getCarsGarage } from '../api';

export class GarageField extends BaseComponent {
  private page = new Title('Page #1', ['small']);

  private pagination = new Pagination();

  constructor() {
    super('div', ['garage__field']);
    this.getCars();
  }

  async getCars(): Promise<any> {
    const cars = await getCarsGarage();
    this.renderTitle(cars);
    this.renderCars(cars);
  }

  renderTitle(arr: IOneCarInGarage[]): void {
    const titleField = new Title(`Garage (${arr.length})`);
    this.element.appendChild(titleField.element);
    this.element.appendChild(this.page.element);
  }

  renderCars(arr: IOneCarInGarage[]): void {
    arr.map((el: IOneCarInGarage) => {
      const carField = new CarField(`${el.name}`, `${el.color}`);
      this.element.appendChild(carField.element);
    });
    this.element.appendChild(this.pagination.element);
  }
}
