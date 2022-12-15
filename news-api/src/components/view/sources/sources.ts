import { IItemData } from '../../../type'
import './sources.css';

class Sources {
    draw(data: object[]): void {

        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item: IItemData) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);
            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
