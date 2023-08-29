class UserInfo {

	public name: string;	// 접근 get 설정 set 2개가 외부, 내부 자유로움
	private _age: number;	// protected 접근 get 설정 set 2개가 자기 자신한테만 허용 + 자신을 상속받은 자식한테도 허용
	private _phone: string;	// 접근 get 설정 set 2개가 자기 자신한테만 허용

	constructor(name: string, age: number, phone: string) {
		this.name = name;
		this._age = age;
		this._phone = phone;
	}

	// 특정 포맷 필요
	get phone() {
		return (
			this._phone.slice(0, 3) + " - " +
			this._phone.slice(3, 7) + " - " +
			this._phone.slice(7, 12)
		);
	}

	// 인자의 조건이 있는 경우: 속력, 나이, 넓이 -> 데이터 무결성
	set phone(newPhone: string) {
		this._phone = newPhone;
	}

	get age() {
		return this._age;
	}

	set age(newAge: number) {
		this._age = newAge;
	}
}

const user = new UserInfo("태형", 25, "01011112222");
user.age = -27;	// setter가 없다면 데이터무결성에 문제
console.log(user.name, user.age, user.phone);