import {Component } from 'angular2/core';

@Component({
    selector: 'example-pipes', 
    template: `
          {{course.title | uppercase}} <br/>
          {{course.students | number}} <br/>
          {{course.rating | number: '2.2-2'}} <br/>
          {{course.price | currency:'AUD':true:'2.2-2'}} <br/>
          {{course.releaseDate | date:'MMM yyyy'}} <br/>
          {{course | json}}          
          `,
   directives:[],
})

export class ExamplePipesComponent {
  course = {
      title: "Angular 2 for beginners",
      rating: 4.9745,
      students: 5981,
      price: 99.3432,
      releaseDate: new Date()
  } 
}