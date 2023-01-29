import { INewsData } from '../../../type'

import './news.css';

class News {
    draw(data: INewsData[]): void {

        const news = data.length >= 10 ? data.filter((_item: object, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');


        news.forEach((item: INewsData, idx: number) => {
            const newsClone: DocumentFragment = <DocumentFragment>newsItemTemp?.content.cloneNode(true);
            if (newsClone) {
                if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
                const image: HTMLImageElement | null = newsClone.querySelector('.news__meta-photo');
                if (image) {
                    image.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }
                const author: HTMLLIElement | null = newsClone.querySelector('.news__meta-author')
                if (author) {
                    author.textContent = item.author || item.source.name;
                }
                const date: HTMLLIElement | null = newsClone.querySelector('.news__meta-date')
                if (date) {
                    date.textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
                }
                const title: HTMLLIElement | null = newsClone.querySelector('.news__description-title')
                if (title) {
                    title.textContent = item.title;
                }
                const source: HTMLLIElement | null = newsClone.querySelector('.news__description-source')
                if (source) {
                    source.textContent = item.source.name;
                }
                const content: HTMLLIElement | null = newsClone.querySelector('.news__description-content')
                if (content) {
                    content.textContent = item.description;
                }


                newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);

                fragment.append(newsClone);
            }

        });
        const el: HTMLElement | null = document.querySelector('.news');
        if (el) {
            el.innerHTML = '';
        }
        document.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
