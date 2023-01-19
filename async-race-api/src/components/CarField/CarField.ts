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

  // private carImage = new CarImage(color);

  constructor(nameCar: string, color: string) {
    super('div', ['car__field']);
    const btn = document.createElement('div');
    const titleCar = new Title(nameCar, ['small', 'margin-left']);
    const carImage = new CarImage(color);
    btn.className = 'btn';
    this.element.appendChild(btn);
    btn.appendChild(this.selectBtn.element);
    btn.appendChild(this.removeBtn.element);
    btn.appendChild(this.aBtn.element);
    btn.appendChild(this.bBtn.element);
    btn.appendChild(titleCar.element);
    this.element.appendChild(carImage.element);
  }
}
