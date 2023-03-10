import { MainView } from './views/main/main.js';
class App {
  routes = [
    { path: "", view: MainView }
  ];

  constructor() {
    window.addEventListener('hashchange', this.route.bind(this));
    this.route();
  }

  route() {

    if (this.currentView) {
      this.currentView.destroy();
    }

    const view = this.route.find(route => route.path == location.hash).view;
    this.currentView = new view();
    this.currentView.render();
  }
}

new App();