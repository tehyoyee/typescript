// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있다...
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Controller(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._email = "hello";
            return _this;
        }
        return class_1;
    }(constructor));
}
function Get(params) {
    // console.log("[GET] ", params);
}
function Post(params) {
    console.log("[POST] deco deco Factory : ", params);
    return function (// 데코레이터 함수
    target, propertyKey, descriptor //		meta-data
    ) {
        console.log("[POST] deco deco Func", target, propertyKey, descriptor);
        target.getReq();
        target[propertyKey]();
    };
}
function UseGuard() {
    console.log("UseGuard Factory : ");
    return function (// 데코레이터 함수
    constructor, propertyKey, descriptor) {
        console.log("UseGuard deco deco Func : ");
        console.log();
        console.log(constructor);
        console.log();
        console.log(propertyKey);
        console.log();
        console.log(descriptor);
        console.log();
    };
}
function Column(params) {
    // console.log("Column !!");
}
var ExampleController = /** @class */ (function () {
    function ExampleController(email) {
        this._email = email;
    }
    ExampleController.prototype.getReq = function () {
        console.log("getReq method process!");
    };
    // Factory { f(g(x)) 여기서 f 역할, g deco func } -> top to bottom
    // deco func bottom to top
    ExampleController.prototype.postReq = function () {
        console.log("postReq method process!");
    };
    Object.defineProperty(ExampleController.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Get("/user")
    ], ExampleController.prototype, "getReq", null);
    __decorate([
        Post("/board"),
        UseGuard()
    ], ExampleController.prototype, "postReq", null);
    __decorate([
        UseGuard()
    ], ExampleController.prototype, "email", null);
    ExampleController = __decorate([
        Controller
    ], ExampleController);
    return ExampleController;
}());
console.log(new ExampleController("tehyoyee@gmail.com"));
