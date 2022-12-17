import AppController from '../controller/controller';
import { IController, IView } from '../../type'
import { AppView } from '../view/appView';

class App {
    public controller: IController;
    public view: IView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            ?.addEventListener('click', (e: Event) => this.controller.getNews(e, (data: any) => this.view.drawNews(data)));
        this.controller.getSources((data: any) => this.view.drawSources(data));
    }
}

export default App;
