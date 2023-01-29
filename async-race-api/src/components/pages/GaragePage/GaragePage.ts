import { BaseComponent } from '../../base-components';
import { GarageField } from '../../GarageField/GarageField';
import { createCar, upDateCar } from '../../api';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import './style.scss';

export class GaragePage extends BaseComponent {
  private createBtn = new Button('CREATE', ['white']);

  private updateBtn = new Button('UPDATE', ['white']);

  private inputCreate = new Input();

  private inputUpDate = new Input();

  private raceBtn = new Button('RACE');

  private resetBtn = new Button('RESET');

  private generateCorsBtn = new Button('GENERATE CARS');

  private garageField = new GarageField((id: number, carName: string,
    carColor: string) => this.selectCar(id, carName, carColor));

  private colorInCreate = document.createElement('input');

  private colorInUpDate = document.createElement('input');

  private newCarName = '';

  private colorCarCreate = '';

  private colorCarUpDate = '';

  constructor() {
    super('div', ['tooltip', 'garage-page']);
    this.render();
    this.inputCreate.element.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      if (target) {
        this.newCarName = target.value;
      }
    });

    this.createBtn.element.addEventListener('click', async () => {
      const newCar = await createCar(this.newCarName, this.colorCarCreate);
      this.garageField.addCar(newCar);
      const inputCreateName = this.inputCreate.element as HTMLInputElement;
      inputCreateName.value = '';
    });

    this.element.appendChild(this.garageField.element);
  }

  render(): void {
    const createCarField = document.createElement('div');
    const upDateCarField = document.createElement('div');
    const btnInFooter = document.createElement('div');
    this.colorInCreate.setAttribute('type', 'color');
    this.colorInUpDate.setAttribute('type', 'color');
    this.colorCarCreate = this.colorInCreate.value;
    this.colorCarUpDate = this.colorInUpDate.value;
    createCarField.className = 'create-car-field';
    upDateCarField.className = 'update-car-field';
    btnInFooter.className = 'btn-footer';
    this.element.appendChild(createCarField);
    this.element.appendChild(upDateCarField);
    this.element.appendChild(btnInFooter);
    createCarField.appendChild(this.inputCreate.element);
    createCarField.appendChild(this.colorInCreate);
    createCarField.appendChild(this.createBtn.element);
    upDateCarField.appendChild(this.inputUpDate.element);
    upDateCarField.appendChild(this.colorInUpDate);
    upDateCarField.appendChild(this.updateBtn.element);
    btnInFooter.appendChild(this.raceBtn.element);
    btnInFooter.appendChild(this.resetBtn.element);
    btnInFooter.appendChild(this.generateCorsBtn.element);

    this.colorInCreate.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      if (target) {
        this.colorCarCreate = target.value;
      }
    });
  }

  async selectCar(id: number, carName: string, carColor: string): Promise<void> {
    const inputUpDateName = this.inputUpDate.element as HTMLInputElement;
    const colorInUpDate = this.colorInUpDate as HTMLInputElement;
    inputUpDateName.value = carName;
    colorInUpDate.value = carColor;

    this.inputUpDate.element.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      if (target) {
        this.newCarName = target.value;
      }
    });

    this.colorInUpDate.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      if (target) {
        this.colorCarUpDate = target.value;
      }
    });

    this.updateBtn.element.addEventListener('click', async () => {
      await upDateCar(id, this.newCarName, this.colorCarUpDate);
      this.garageField.upDateCar(id, this.newCarName, this.colorCarUpDate);
      inputUpDateName.value = '';
    });
  }
}
