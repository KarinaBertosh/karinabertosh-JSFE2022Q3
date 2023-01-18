import { App } from './components/App';

import './styles.scss';

window.onload = () => {
  const app = new App();
  document.body.appendChild(app.element);
};
