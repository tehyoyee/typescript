interface IAdd {
	(a:number, b: number): IAdd;

	a: number;
	b: number;

	getResult(): number;
}

// class Add {
// 	constructor(public a: number, b: number) {}

// 	getResult() {
// 		return this.a + this.b;
// 	}
// }

// returntype이 typeof globalThis로 된다
// temp1을 대보면 typeof globalThis 가 나온다
// return type이 IAdd 라는 걸 알려주기위해
// as를 사용하여 타입을 명시해주고 리턴한다.
const add = (a: number, b: number): IAdd => {
	const _this = JSON.parse(JSON.stringify(this)) as any as IAdd;	// 타입변환이 잘 안되면 any를 통해 as를 1번 더 써서 명시해준다.
	_this.a = a;
	_this.b = b;

	_this.getResult = () => {
		return a + b;
	}

	return _this;
};

const temp1 = add(1, 2);
const temp2 = add(4, 5);
const temp3 = add(10, 12);

console.log(temp1, temp1.a, temp1.b, temp1.getResult());
console.log(temp2, temp2.a, temp2.b, temp2.getResult());
console.log(temp3, temp3.a, temp3.b, temp3.getResult());