import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '56950494432143cf891079413f679361', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
