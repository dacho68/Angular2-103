import {Component } from 'angular2/core';

@Component({
    selector: 'example-hidden', 
    template: `
          <div [hidden]="courses.length == 0">List of courses</div>
          <div [hidden]="courses.length > 0">You dont have any courses yet.</div>
          `,
   directives:[],
})

export class ExampleHiddenComponent {
  courses = [];
}