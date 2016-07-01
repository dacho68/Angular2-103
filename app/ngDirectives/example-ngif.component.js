System.register(['@angular/core'], function(exports_1, context_1) {
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
    var ExampleNgIfComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExampleNgIfComponent = (function () {
                function ExampleNgIfComponent() {
                    this.courses = [];
                }
                ExampleNgIfComponent = __decorate([
                    core_1.Component({
                        selector: 'example-ngif',
                        template: "\n          <div *ngIf=\"courses.length > 0\">List of courses</div>\n          <div *ngIf=\"courses.length == 0\">You dont have any courses yet.</div>\n          ",
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExampleNgIfComponent);
                return ExampleNgIfComponent;
            }());
            exports_1("ExampleNgIfComponent", ExampleNgIfComponent);
        }
    }
});
//# sourceMappingURL=example-ngif.component.js.map