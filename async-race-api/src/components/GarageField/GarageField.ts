import { BaseComponent } from '../base-components';
import { Title } from '../Title/Title';
import { CarField } from '../CarField/CarField';
import { Pagination } from '../Pagination/Pagination';
import { ICar } from '../type';
import { deleteCar, getCarsGarage } from '../api';
import './style.scss';

export class GarageField extends BaseComponent {
  private page = new Title('Page #1', ['small']);

  private pagination = new Pagination();

  private cars = [];

  constructor() {
    super('div', ['garage__field']);
    this.getCars();
  }

  async getCars(): Promise<any> {
    this.cars = await getCarsGarage();
    this.renderTitle(this.cars);
    this.renderCars(this.cars);
  }

  renderTitle(cars: ICar[]): void {
    const titleField = new Title(`Garage (${cars.length})`);
    this.element.appendChild(titleField.element);
    this.element.appendChild(this.page.element);
  }

  addCar(car: any): void {
    this.cars = this.cars.concat(car);
    this.renderCars(this.cars);
  }

  renderCars(cars: ICar[]): void {
    this.element.innerHTML = '';
    cars.map((el: ICar) => {
      const carField = new CarField(`${el.name}`, `${el.color}`, () => this.removeCar(el.id));
      this.element.appendChild(carField.element);
    });
    this.element.appendChild(this.pagination.element);
  }

  async removeCar(id: number): Promise<any> {
    const car = await deleteCar(id);
    this.cars = this.cars.filter((c: ICar) => c.id !== id);
    this.renderCars(this.cars);
  }
}
