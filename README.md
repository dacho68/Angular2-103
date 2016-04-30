# Angular2-103
In this section you will learn of how to Control the Rendering of the HTML.  It's important to well understand the rendering
so you can build a slick font-end application. Most of the samples are from the course [Angular 2 with TypeScript](https://www.udemy.com/angular-2-tutorial-for-beginners/learn/v4/overview) by Mosh Hamedi on Udemy.
I'm developping the Angular 2 samples along way I'm learning Angular 2. If you have time, I recommend you to take the course because it has richer contents.

- [Jumpstart](https://github.com/dacho68/Angular2-Jumpstart) - Quick understanding of how to build an App with Angular 2.
- [101](https://github.com/dacho68/Angular2-101) - Property Binding, Class and Style Binding, Event Binding, Two way Binding.
- [102](https://github.com/dacho68/Angular2-102) - Component API in depth, Input and Output properties.
- 103 - Controlling Rendering of the HTML - ngId, ngSwitch, ngFor, Leading *, Pipes, ngClass, ngStyle, Elvis Operator, ng-content. 


## ngIf vs [Hiden]
ngIf will not generate the element if it's condition is *false*; You archive the same result by binding to the DOM *hidden* attribute on an element.

**Example:** using *ngIf
``` typescript
@Component({
    selector: 'example-ngif', 
    template: `
          <div *ngIf="courses.length > 0">List of courses</div>
          <div *ngIf="courses.length == 0">You dont have any courses yet.</div>
          
          `,
   directives:[],
})

```
The false condition element is not exist the DOM as showing below.<br>
![ngIf](./images/ngif.jpg)

**Example:** using *hidden*
``` typescript
@Component({
    selector: 'example-hidden', 
    template: `
          <div [hidden]="courses.length == 0">List of courses</div>
          <div [hidden]="courses.length > 0">You dont have any courses yet.</div>
          `,
   directives:[],
})
```
The element is hidden but it's still in the DOM. <br>

![ngIf](./images/hidden.jpg)



