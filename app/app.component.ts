// core of angular2. always need it
import {Component} from '@angular/core';
import {ExampleNgIfComponent} from './ngDirectives/example-ngif.component';
import {ExampleHiddenComponent} from './ngDirectives/example-hidden.component'
import {ExampleNgSwitchComponent} from './ngDirectives/example-ngswitch.component'
import {ExampleNgForComponent} from './ngDirectives/example-ngfor.component'
import {ExamplePipesComponent} from './ngDirectives/example-pipes.component'
import {ZippyComponent} from './exercises/zippy.component'


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
              <h4>Pipes</h4>
              <example-pipes></example-pipes>
              <h4>Exercise 1:</h4>
              <zippy title = "This is the title">
                 Here is the content
              </zippy>
              `,
              
    // including those components
   directives:[ExampleNgIfComponent,ExampleHiddenComponent,
              ExampleNgSwitchComponent,
              ExampleNgForComponent,
              ExamplePipesComponent, 
              ZippyComponent]
})

export class AppComponent {
 
}