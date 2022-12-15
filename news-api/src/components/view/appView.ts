import News from './news/news';
import Sources from './sources/sources';
import { IDataAppView , IDataAppViewInDrawSources} from '../../type'

export class AppView {
    public news: object;
    public sources: object;

    constructor() {
        this.news = new News();
        this.sources = new Sources();

    }

    drawNews(data: IDataAppView): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDataAppViewInDrawSources): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
