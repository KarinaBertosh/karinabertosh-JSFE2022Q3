import { IItemData } from '../../../type'
import './sources.css';

class Sources {
  draw(data: IItemData[]): void {

    const fragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    data.forEach((item: IItemData) => {
      const sourceClone: HTMLTemplateElement = <HTMLTemplateElement>sourceItemTemp?.content.cloneNode(true);
      if (sourceClone) {
        const span: HTMLSpanElement | null = sourceClone.querySelector('.source__item-name')
        if (span) {
          span.textContent = item.name;
        }
        sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
        fragment.append(sourceClone);
      }

    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
