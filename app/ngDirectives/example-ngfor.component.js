System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ExampleNgForComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExampleNgForComponent = (function () {
                function ExampleNgForComponent() {
                    this.courses = ['Course 1', 'Course 2', 'Course 3'];
                }
                ExampleNgForComponent = __decorate([
                    core_1.Component({
                        selector: 'example-ngfor',
                        template: "\n            <ul>\n               <li *ngFor=\"#course of courses, #i = index\">\n               {{i+1}} - {{course}}\n               </li>\n            </ul>         \n          ",
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExampleNgForComponent);
                return ExampleNgForComponent;
            }());
            exports_1("ExampleNgForComponent", ExampleNgForComponent);
        }
    }
});
//# sourceMappingURL=example-ngfor.component.js.map