function add(a: number, b: number): number {
	return a + b;
}

function add2(a: number, b: number): string {
	return String(a + b);
}

function add3(a: number, b: number): void {		// void
	return;	// void
}




const minus = (a: number, b: number): string => String(a - b);		// minus 함수에 대한 타입이 안달려있다

const minus2: (a: number, b: number) => string = (		// minus2 함수에 대한 타입을 달았다
	a: number,
	b: number
): string => String(a - b);


// 함수안에 함수 : 복잡
const multiple: (a: number, b: number) => () => number = (	// input type
	a: number,
	b: number
): (() => number) /* return type */=> {
	return () => {	// content
		return a * b * 2;
	};
};


console.log(add(1,3));
console.log(multiple(1,3));

type typeName = any;
type addFunc = (a: number, b: number) => string;
type subMultiFunc = () => number;
type mainMultiFunc = (a: number, b: number) => subMultiFunc;

// 타입 별칭 지정하여 간단하게..

const multiple2: mainMultiFunc = (a: number, b: number): subMultiFunc => {
	return () => {
		return a * b * 2;
	};
};

// 타입별칭 :
// 함수
// 타입이 길어질 때 "hello" | "world" | "hi" || "hi2" ...
// 쓴다.

function sendError(): void {
	console.log("에러 발생");
	return;
}
function sendError2(): never {		// 실상 void 인데 error 문구를 throw 로 날릴때 never 로 기재
	throw { errorCode: 500, message: "internal server error" };
}

const result = sendError();
const result2 = sendError2();
console.log("result :", result);
console.log("result :", result2);