import {Component } from 'angular2/core';

@Component({
    selector: 'example-ngif', 
    template: `
          <div *ngIf="courses.length > 0">List of courses</div>
          <div *ngIf="courses.length == 0">You dont have any courses yet.</div>
          `,
   directives:[],
})

export class ExampleNgIfComponent {
  courses = [];
}