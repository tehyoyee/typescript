// 1. 데코레이터는 함수다
function InitClass(params: any) {
	console.log("InitClass : ", params);
}

// 2. 데코레이터는 무조건 class 와만 같이 쓴다 (내부 외부, 멤버 변수, 메소드, 파라미터...)
@InitClass
class ExampleClass {
	constructor() {}
}

// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ -> new Class() 인스턴스화 없이 실행
// new ExampleClass();

// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있다...
function Controller(params: any) {
	console.log("InitClass : ", params);
}

function Get(params: any): any {
	console.log("[GET] ", params);
}

function Post(params: any): any {
	console.log("[GET] ", params);
}

function Column(params: any): any {
	console.log("Column !!");
}

@Controller
class ExampleController {

	@Column("email")
	private _email: string;

	constructor(email: string) {
		this._email = email;
	}

	@Get("/api/v1/user")
	getReq() {}

	@Post("/api/v1/board")
	postReq() {}

}