const add1: Function = new Function("a", "b", "return a + 2 * b");
console.log(add1(1, 3));

interface ADD2 {
	(a: number, b: number): number;
}

const add2: ADD2 = function ADD2(a: number, b: number): number {
	return a + b;
};
console.log(add2(4, 6));

// 위에서 함수가 객체라는 걸 알 수 있다.