import { BaseComponent } from '../../base-components';
import { GarageField } from '../../GarageField/GarageField';
import { createCar } from '../../api';
import { Button } from '../../Button/Button';
import { Input } from '../../Input/Input';
import { ICar } from '../../type';
import './style.scss';

export class GaragePage extends BaseComponent {
  private createBtn = new Button('CREATE', ['white']);

  private updateBtn = new Button('UPDATE', ['white']);

  private inputCreate = new Input();

  private inputUpDate = new Input();

  private raceBtn = new Button('RACE');

  private resetBtn = new Button('RESET');

  private generateCorsBtn = new Button('GENERATE CARS');

  private newCarName = '';

  private newCarColor = '';

  private garageField = new GarageField();

  constructor(carsInGarage?: () => any) {
    super('div', ['tooltip', 'garage-page']);
    this.render();
    const cars: any = carsInGarage;
    this.inputCreate.element.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      if (target) {
        this.newCarName = target.value;
      }
    });
    this.createBtn.element.addEventListener('click', async (e) => {
      const newCar = await createCar(this.newCarName, this.newCarColor);
      console.log(newCar);
      this.garageField.addCar(newCar);
    });

    this.element.appendChild(this.garageField.element);
  }

  render(): void {
    const createCarField = document.createElement('div');
    const upDateCarField = document.createElement('div');
    const btnInFooter = document.createElement('div');
    const colorInCreate = document.createElement('input');
    const colorInUpDate = document.createElement('input');
    colorInCreate.setAttribute('type', 'color');
    colorInUpDate.setAttribute('type', 'color');
    createCarField.className = 'create-car-field';
    upDateCarField.className = 'update-car-field';
    btnInFooter.className = 'btn-footer';
    this.element.appendChild(createCarField);
    this.element.appendChild(upDateCarField);
    this.element.appendChild(btnInFooter);
    createCarField.appendChild(this.inputCreate.element);
    createCarField.appendChild(colorInCreate);
    createCarField.appendChild(this.createBtn.element);
    upDateCarField.appendChild(this.inputUpDate.element);
    upDateCarField.appendChild(colorInUpDate);
    upDateCarField.appendChild(this.updateBtn.element);
    btnInFooter.appendChild(this.raceBtn.element);
    btnInFooter.appendChild(this.resetBtn.element);
    btnInFooter.appendChild(this.generateCorsBtn.element);

    colorInCreate.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      if (target) {
        this.newCarColor = target.value;
      }
    });
  }
}
