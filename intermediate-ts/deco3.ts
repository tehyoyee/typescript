// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있다...

function Controller(constructor: { new (email: string): any }): any {	
	return class extends constructor {		// 데이터 조작할땐 클래스 리턴
		_email = "hello";
	};
}

function Get(params: any): any {
	// console.log("[GET] ", params);
}

function Post(params: any): any {
	console.log("[POST] deco deco Factory : ", params);

	return (				// 데코레이터 함수
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor	//		meta-data
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

@Controller
class ExampleController {

	// @Column("email")
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

	@UseGuard()
	get email(): string {
		return this._email;
	}
}

console.log(new ExampleController("tehyoyee@gmail.com"));