import './news.css';

class News {
    draw(data: object[]): void {

        const news = data.length >= 10 ? data.filter((_item: object, idx: number) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        // item: object, idx: number
        news.forEach((item: any, idx: number) => {
            const newsClone: DocumentFragment = <DocumentFragment>newsItemTemp?.content.cloneNode(true);
            if (newsClone) {
                if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

                newsClone.querySelector('.news__meta-photo').style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'
                    })`;
                newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
                newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                newsClone.querySelector('.news__description-title').textContent = item.title;
                newsClone.querySelector('.news__description-source').textContent = item.source.name;
                newsClone.querySelector('.news__description-content').textContent = item.description;
                newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

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
