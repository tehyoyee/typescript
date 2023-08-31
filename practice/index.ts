// class Person {
// 	constructor(public name, public city) {}

import { Interface } from "readline";

// 	getName() {
// 		console.log(`my name is $(this.name)`);
// 	}
// }

// 클래스를 함수로 바꿔보자. 함수도 상속가능

function Person(name, city) {
	this.name = name;
	this.city = city;
	this.getName = function () {
		console.log(`my name is $(this.name)`);
	};
}

function Student(name, city, uni) {
	Person.call(this, name, city);		// 상속
	this.uni = uni;
	this.getUni = function() {
		console.log(`hi ${this.uni}`);
	};
}

interface IPerson {
	(name: string, city: string): void;	// student 함수

	name: string;
	city: string;

	getName: () => void;
}

interface IStudent extends IPerson {
	(name: string, city: string, uni: string): void;	// student 함수

	uni: string;	// 필드

	getUni: () => void;		// 멤버함수
}

const p = new Person("cys", "seoul");
console.log(p, p.getName());
console.log(Object.getPrototypeOf(p));
const s: IStudent = new Student("cys", "seoul", "CAU");
console.log(s, s.getName(), s.getUni());