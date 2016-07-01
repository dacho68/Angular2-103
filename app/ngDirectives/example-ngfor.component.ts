import {Component } from '@angular/core';

@Component({
    selector: 'example-ngfor', 
    template: `
            <ul>
               <li *ngFor="#course of courses, #i = index">
               {{i+1}} - {{course}}
               </li>
            </ul>         
          `,
   directives:[],
})

export class ExampleNgForComponent {
  courses = ['Course 1', 'Course 2', 'Course 3'];
}