import { BaseComponent } from '../base-components';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './style.scss';

export class Tooltip extends BaseComponent {
  private createBtn = new Button('CREATE', ['white']);

  private updateBtn = new Button('UPDATE', ['white']);

  private inputCreate = new Input();

  private inputUpDate = new Input();

  private raceBtn = new Button('RACE');

  private resetBtn = new Button('RESET');

  private generateCorsBtn = new Button('GENERATE CORS');

  constructor() {
    super('div', ['tooltip']);
    const createCarField = document.createElement('div');
    const upDateCarField = document.createElement('div');
    const btnInFooter = document.createElement('div');
    createCarField.className = 'create-car-field';
    upDateCarField.className = 'update-car-field';
    btnInFooter.className = 'btn-footer';
    this.element.appendChild(createCarField);
    this.element.appendChild(upDateCarField);
    this.element.appendChild(btnInFooter);
    createCarField.appendChild(this.inputCreate.element);
    createCarField.appendChild(this.createBtn.element);
    upDateCarField.appendChild(this.inputUpDate.element);
    upDateCarField.appendChild(this.updateBtn.element);
    btnInFooter.appendChild(this.raceBtn.element);
    btnInFooter.appendChild(this.resetBtn.element);
    btnInFooter.appendChild(this.generateCorsBtn.element);
  }
}
