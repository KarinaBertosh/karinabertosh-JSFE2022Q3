import { BaseComponent } from '../base-components';
import { Title } from '../Title/Title';
import { CarField } from '../CarField/CarField';
import { Pagination } from '../Pagination/Pagination';
import { ICar } from '../type';
import { deleteCar, getCarsGarage, getCarsWinners } from '../api';
import './style.scss';

export class GarageField extends BaseComponent {
  private page = new Title('Page #1', ['small']);

  private pagination = new Pagination();

  private selectCar: (id: number, carName: string, carColor: string) => void;

  private cars = [];

  private carsWin = [];

  constructor(selectCar: (id: number, carName: string, carColor: string) => void) {
    super('div', ['garage__field']);
    this.getCars();
    this.selectCar = selectCar;
  }

  async getCars(): Promise<any> {
    this.cars = await getCarsGarage();
    this.carsWin = await getCarsWinners();
    this.renderCars(this.cars);
  }

  renderTitle(cars: ICar[]): void {
    const titleField = new Title(`Garage (${cars.length})`);
    this.element.appendChild(titleField.element);
    this.element.appendChild(this.page.element);
  }

  addCar(car: any): void {
    this.element.innerHTML = '';
    this.cars = this.cars.concat(car);
    this.renderCars(this.cars);
  }

  upDateCar(id: number, carName: string, carColor: string): void {
    // this.element.innerHTML = '';
    const newCars = this.cars.map((car: ICar) => (
      car.id === id
        ? { ...car, name: carName, color: carColor }
        : car
    ));
    this.renderCars(newCars);
  }

  renderCars(cars: ICar[]): void {
    this.element.innerHTML = '';
    this.renderTitle(this.cars);
    cars.map((el: ICar) => {
      const carField = new CarField(`${el.name}`, `${el.color}`,
        () => this.removeCar(el.id), () => this.selectCar(el.id, el.name, el.color));
      this.element.appendChild(carField.element);
    });
    this.element.appendChild(this.pagination.element);
  }

  async removeCar(id: number): Promise<any> {
    await deleteCar(id);
    this.cars = this.cars.filter((c: ICar) => c.id !== id);
    // this.carsWin = this.carsWin.filter((c: ICar) => c.id !== id);
    this.renderCars(this.cars);
    // this.renderCarsWin(this.carsWin);
  }
}
