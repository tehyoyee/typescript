// 1. null undefined 같은 값.
const un: undefined = undefined;

// 2. undefined 2개가 있다. 변수와 타입


// 3. 최하위 계층  undefined  모든 타입의 최하위기 때문..


interface IMan {
	name: string;
}

function printName(params: IMan) {
	console.log("printName on!");
	// console.log(params.name);
	console.log(params?.name ?? "default value");

}

printName({ name: "taehyeong" });
printName(undefined);