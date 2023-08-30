// f(g(x)) -----> f() { return g() }, g: 데코레이터함수
// g -----> f(g(x)) , f: 데코레이터 팩토리 (목적: 인자전달, param 전달)



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
function Controller(constructor: any): any {
	console.log("Controller : ", constructor);
	
	return (				// 데코레이터 함수
		constructor: Function,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) => {
		console.log(
			constructor,
			propertyKey,
			descriptor,
	)};
}

function Get(params: any): any {
	// console.log("[GET] ", params);
}

function Post(params: any): any {
	console.log("[POST] deco deco Factory : ", params);

	return (				// 데코레이터 함수
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) => {
		console.log(
			"[POST] deco deco Func",
			target,
			propertyKey,
			descriptor,
		);
		target.getReq();
		target[propertyKey]();
	};
}

function UseGuard(): any {
	console.log("UseGuard Factory : ");

	return (				// 데코레이터 함수
		constructor: Function,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) => {
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
function Column(params: any): any {
	// console.log("Column !!");
}

@Controller("/api/v1")	// "/api/v1" 인자로 넘어감
class ExampleController {

	@Column("email")
	private _email: string;

	constructor(email: string) {
		this._email = email;
	}

	@Get("/user")
	getReq() {
		console.log("getReq method process!");
	}

	// Factory { f(g(x)) 여기서 f 역할, g deco func } -> top to bottom
	// deco func bottom to top
	@Post("/board")
	@UseGuard()
	postReq() {
		console.log("postReq method process!");
	}

}