import AppController from '../controller/controller';
export interface Controller {}
export interface View {}
import { AppView } from '../view/appView';

class App {
    controller: any;
    view: any;

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
