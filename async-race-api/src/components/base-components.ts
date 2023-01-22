export class BaseComponent {
  readonly element: HTMLElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
    if (tag === 'input') {
      this.element = document.createElement(tag) as HTMLInputElement;
    } else {
      this.element = document.createElement(tag);
    }
    this.element.classList.add(...styles);
  }
}
