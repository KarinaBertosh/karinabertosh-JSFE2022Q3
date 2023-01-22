import { BaseComponent } from '../base-components';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';
import { CarImage } from '../CarImage/CarImage';
import './style.scss';

export class CarField extends BaseComponent {
  private selectBtn = new Button('SELECT', ['white']);

  private removeBtn = new Button('REMOVE', ['white']);

  private aBtn = new Button('A');

  private bBtn = new Button('B');

  constructor(nameCar: string, color: string, removeCar: () => void) {
    super('div', ['car__field']);
    const btn = document.createElement('div');
    const carField = document.createElement('div');
    const titleCar = new Title(nameCar, ['small', 'margin-left']);
    const carImage = new CarImage(color);
    const flag = new Image();
    flag.src = './flag.png';
    btn.className = 'btn';
    carField.className = 'car-field__image-flag';
    this.element.appendChild(btn);
    btn.appendChild(this.selectBtn.element);
    btn.appendChild(this.removeBtn.element);
    btn.appendChild(this.aBtn.element);
    btn.appendChild(this.bBtn.element);
    btn.appendChild(titleCar.element);
    this.element.appendChild(carField);
    carField.appendChild(carImage.element);
    carField.appendChild(flag);

    this.removeBtn.element.addEventListener('click', (event) => {
      removeCar();
    });
  }
}
