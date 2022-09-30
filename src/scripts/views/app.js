import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, jumbotron, catalog,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._jumbotron = jumbotron;
    this._catalog = catalog;

    this._initAppShell();
  }

  _initAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      jumbotron: this._jumbotron,
      catalog: this._catalog,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrl();
    const page = routes[url];
    this._catalog.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
