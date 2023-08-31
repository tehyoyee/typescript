"use strict";
// class Person {
// 	constructor(public name, public city) {}
Object.defineProperty(exports, "__esModule", { value: true });
// 	getName() {
// 		console.log(`my name is $(this.name)`);
// 	}
// }
// 클래스를 함수로 바꿔보자. 함수도 상속가능
function Person(name, city) {
    this.name = name;
    this.city = city;
    this.getName = function () {
        console.log("my name is $(this.name)");
    };
}
function Student(name, city, uni) {
    Person.call(this, name, city); // 상속
    this.uni = uni;
    this.getUni = function () {
        console.log("hi ".concat(this.uni));
    };
}
var p = new Person("cys", "seoul");
console.log(p, p.getName());
console.log(Object.getPrototypeOf(p));
var s = new Student("cys", "seoul", "CAU");
console.log(s, s.getName(), s.getUni());
