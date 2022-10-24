import { BaseComponent } from '../base-components';
import { Button } from '../Button/Button';
import './style.scss';

export class SoundBtn extends BaseComponent {
  soundButtonText = 'Sound ON';

  soundBtn = new Button(this.soundButtonText);

  constructor() {
    super('div', ['sound']);
    this.element.appendChild(this.soundBtn.element);
  }

  changeSoundBtn(): void {
    this.element.innerHTML = '';
    if (this.soundButtonText === 'Sound ON') {
      this.soundButtonText = 'Sound OFF';
    } else {
      this.soundButtonText = 'Sound ON';
    }
    this.soundBtn = new Button(this.soundButtonText);
    this.element.appendChild(this.soundBtn.element);
  }

  getSoundButtonText(): string {
    return this.soundButtonText;
  }
}
