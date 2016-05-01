System.register(['angular2/core', './summary.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, summary_pipe_1;
    var ExamplePipesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            ExamplePipesComponent = (function () {
                function ExamplePipesComponent() {
                    this.course = {
                        title: "Angular 2 for beginners",
                        rating: 4.9745,
                        students: 5981,
                        price: 99.3432,
                        releaseDate: new Date()
                    };
                    this.post = {
                        body: "Below is a list of worldwide mass animal deaths for 2016, \n      with pages also for mass die offs from the previous 5 years. \n      There are animals dying all over the world today in huge numbers, \n      due to the polluted state of the sea and air. \n      Millions of Fish and massive numbers of whales and dolphins are washing ashore dead. \n      Birds are falling dead out of the sky, and millions of poultry are dying from avian flu.\n      "
                    };
                }
                ExamplePipesComponent = __decorate([
                    core_1.Component({
                        selector: 'example-pipes',
                        template: "\n          {{course.title | uppercase}} <br/>\n          {{course.students | number}} <br/>\n          {{course.rating | number: '2.2-2'}} <br/>\n          {{course.price | currency:'AUD':true:'2.2-2'}} <br/>\n          {{course.releaseDate | date:'MMM yyyy'}} <br/>\n          {{course | json}} <br/>\n          {{post.body | summary: 20}}         \n          ",
                        pipes: [summary_pipe_1.SummaryPipe],
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExamplePipesComponent);
                return ExamplePipesComponent;
            }());
            exports_1("ExamplePipesComponent", ExamplePipesComponent);
        }
    }
});
//# sourceMappingURL=example-pipes.component.js.map