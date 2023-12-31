// f(g(x)) -----> f() { return g() }, g: 데코레이터함수
// g -----> f(g(x)) , f: 데코레이터 팩토리 (목적: 인자전달, param 전달)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 데코레이터는 함수다
// function InitClass(params: any) {
// 	console.log("InitClass : ", params);
// }
// 2. 데코레이터는 무조건 class 와만 같이 쓴다 (내부 외부, 멤버 변수, 메소드, 파라미터...)
// @InitClass
// class ExampleClass {
// constructor() {}
// }
// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ -> new Class() 인스턴스화 없이 실행
// new ExampleClass();
// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있다...
function Controller(constructor) {
    console.log("Controller : ", constructor);
    return function (// 데코레이터 함수
    constructor, propertyKey, descriptor) {
        console.log(constructor, propertyKey, descriptor);
    };
}
function Get(params) {
    // console.log("[GET] ", params);
}
function Post(params) {
    console.log("[POST] deco deco Factory : ", params);
    return function (// 데코레이터 함수
    target, propertyKey, descriptor) {
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
    __decorate([
        Column("email")
    ], ExampleController.prototype, "_email", void 0);
    __decorate([
        Get("/user")
    ], ExampleController.prototype, "getReq", null);
    __decorate([
        Post("/board"),
        UseGuard()
    ], ExampleController.prototype, "postReq", null);
    ExampleController = __decorate([
        Controller("/api/v1") // "/api/v1" 인자로 넘어감
    ], ExampleController);
    return ExampleController;
}());
