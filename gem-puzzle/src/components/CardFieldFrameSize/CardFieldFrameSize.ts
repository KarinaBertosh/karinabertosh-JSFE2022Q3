import './style.scss';
import { BaseComponent } from '../base-components';

export class CardFieldFrameSize extends BaseComponent {
  constructor(startSize: string) {
    super('div', ['card-field-frame-size']);
    this.element.innerHTML = `     
                <div class="card-field-frame-size">Frame size: ${startSize}</div>
            `;
  }

  changeFrameSizeText(newSize: string): void {
    this.element.innerHTML = '';
    this.element.innerHTML = ` 
                <div class="card-field-frame-size">Frame size: ${newSize}</div>`;
  }
}
