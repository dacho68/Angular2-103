// core of angular2. always need it
import {Component} from 'angular2/core';
import {ExampleNgIfComponent} from './ngDirectives/example-ngif.component';
import {ExampleHiddenComponent} from './ngDirectives/example-hidden.component'
import {ExampleNgSwitchComponent} from './ngDirectives/example-ngswitch.component'
import {ExampleNgForComponent} from './ngDirectives/example-ngfor.component'

@Component({
    // element selector my-app
    selector: 'my-app',

    template: `<h1>Welcome to Angular 2 - 103</h1>
              <h4>ngif</h4>
              <example-ngif></example-ngif>
              <h4>hidden</h4>
              <example-hidden></example-hidden>
              <h4>ngSwitch</h4>
              <example-ngswitch></example-ngswitch>
              <h4>ngFor</h4>
              <example-ngfor></example-ngfor>
              `,
    // including those components
   directives:[ExampleNgIfComponent,ExampleHiddenComponent,ExampleNgSwitchComponent,ExampleNgForComponent]
})

export class AppComponent {
 
}