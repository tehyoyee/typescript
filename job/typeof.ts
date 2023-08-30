// 다른 변수, 객체의 타입을 빌려서 타입을 선언할 수 있다.

console.log(typeof "hi");
console.log(typeof 123);
console.log(typeof true);

const exString: string = "some string";

const childString: typeof exString = "haha";
//					string 들어감

function add(a: number, b: number): number {
	return a + b;
}
// ReturnType
type A = ReturnType<typeof add>;
// A = number 된다

enum ENumbers {
	"zero",
	"one",
	"two",
	"three",
}
const nums: typeof ENumbers = ENumbers;
console.log(nums.three);