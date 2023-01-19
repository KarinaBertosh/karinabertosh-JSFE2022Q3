import { BaseComponent } from '../../base-components';
import { Tooltip } from '../../Tooltip/Tooltip';
import { GarageField } from '../../GarageField/GarageField';
import './style.scss';

export class GaragePage extends BaseComponent {
  private tooltip = new Tooltip();

  private garageField = new GarageField();

  constructor() {
    super('div', ['garage__page']);
    this.element.appendChild(this.tooltip.element);
    this.element.appendChild(this.garageField.element);
  }
}
