import { Component, View, platform } from "angular2/core";
import { WORKER_APP_PLATFORM, setupWebWorker } from 'angular2/platform/worker_app';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App!</h1>'
})
class AppComponent { }


platform([WORKER_APP_PLATFORM])
    .asyncApplication(setupWebWorker)
    .then((ref) => ref.bootstrap(AppComponent));