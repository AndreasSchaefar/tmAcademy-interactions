import './sass/main.scss';
import Controller from './Controller';
import View from './view/View';

(() => {
  const app = new Controller(new View('#star-wars'));
})();
