import './style.scss';
import { BaseComponent } from '../base-components';

export class CardFieldFrameSize extends BaseComponent {
  constructor(text: string) {
    super('div', ['card-field-frame-size']);
    this.element.innerHTML = `     
                <div class="card-field-frame-size">Frame size:${text}</div>
            `;
  }
}
