// import from 'aurelia-'
import { PLATFORM } from "aurelia-framework";
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');
import '../static/css/styles.css';

export class App {
  public router;
  configureRouter(config, router) {
    this.router = router;
    config.title = 'Test App';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {route: ['', 'home'], name:'home', moduleId:PLATFORM.moduleName('pages/home/home'), nav:true, title:"Home"},
      {route: ['post/:id?'], name:'post', moduleId:PLATFORM.moduleName('pages/post/post'), title:"Post"},
      {route: ['author/:id?/:postId?'], name:'author', moduleId:PLATFORM.moduleName('pages/author/author'), title:"Author"},
    ]);
  }
}
