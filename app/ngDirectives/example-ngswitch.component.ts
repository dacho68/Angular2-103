import {Component } from 'angular2/core';

@Component({
    selector: 'example-ngswitch', 
    template: 
    `     <p>{{viewMode}}</p>
          <ul class ="nav nav-pills">
             <li [class.active]="viewMode =='map'"> <a (click)="viewMode = 'map'">Map View</a></li>
             <li [class.active]="viewMode =='list'"><a (click)="viewMode = 'list'">List View</a></li>            
          </ul>
          <div [ngSwitch]="viewMode">
             <template [ngSwitchWhen] = "'map'" ngSwitchDefault> Map View Content </template>
             <template [ngSwitchWhen] = "'list'"> List View Content </template>
          </div>
   `,
   directives:[],
})

export class ExampleNgSwitchComponent {
  viewMode = 'map';
}