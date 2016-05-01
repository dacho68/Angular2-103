import {Component } from 'angular2/core';
import {SummaryPipe} from './summary.pipe';

@Component({
    selector: 'example-pipes', 
    template: `
          {{course.title | uppercase}} <br/>
          {{course.students | number}} <br/>
          {{course.rating | number: '2.2-2'}} <br/>
          {{course.price | currency:'AUD':true:'2.2-2'}} <br/>
          {{course.releaseDate | date:'MMM yyyy'}} <br/>
          {{course | json}} <br/>
          {{post.body | summary: 20}}         
          `,
   pipes: [SummaryPipe],
   directives:[],
})

export class ExamplePipesComponent {

  course = {
      title: "Angular 2 for beginners",
      rating: 4.9745,
      students: 5981,
      price: 99.3432,
      releaseDate: new Date()
  };
  
  post = {
      body: `Below is a list of worldwide mass animal deaths for 2016, 
      with pages also for mass die offs from the previous 5 years. 
      There are animals dying all over the world today in huge numbers, 
      due to the polluted state of the sea and air. 
      Millions of Fish and massive numbers of whales and dolphins are washing ashore dead. 
      Birds are falling dead out of the sky, and millions of poultry are dying from avian flu.
      `
  }
  
 
}