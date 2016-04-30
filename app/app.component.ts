// core of angular2. always need it
import {Component} from 'angular2/core';
import {ExampleNgIfComponent} from './ngDirectives/example-ngif.component';
import {ExampleHiddenComponent} from './ngDirectives/example-hidden.component'
// import the components


@Component({
    // element selector my-app
    selector: 'my-app',

    template: `<h1>Welcome to Angular 2 - 103</h1>
              <example-ngif></example-ngif>
              <example-hidden></example-hidden>
              `,
    // including those components
   directives:[ExampleNgIfComponent,ExampleHiddenComponent]
})

export class AppComponent {
 
}