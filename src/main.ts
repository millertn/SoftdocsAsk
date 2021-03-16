import {Aurelia} from 'aurelia-framework';
import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';
// import 'whatwg-fetch';

export function configure(aurelia: Aurelia): void {
  
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin(PLATFORM.moduleName("aurelia-animator-css")); //<-- add this
    

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');
  // aurelia.use.router;

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
