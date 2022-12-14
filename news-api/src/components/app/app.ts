import AppController from '../controller/controller';
import { Controller} from '../../../src/interface'
import { AppView } from '../view/appView';

class App {
    public controller: Controller;
    public view: any;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
        console.log(this.controller);        
        console.log(this.view);        
    }

    start(): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e: any) => this.controller.getNews(e, (data: any) => this.view.drawNews(data)));
        this.controller.getSources((data: any) => this.view.drawSources(data));
    }
}

export default App;
