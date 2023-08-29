// 1
interface IData<T extends string | number> {
	data: T
}

// 2
function returnParams<T>(params: T): T {
	return params;
}

returnParams<string>("hi");
returnParams<number>(25);
returnParams<boolean>(true);

// 3
const rP: <T>(params: T) => T = returnParams
interface IExcxecute {
	rP: <T>(params: T) => T;
}

// 4

interface IOb1 {
	name: string;
	age: number;
}

interface IOb2 {
	city: string;
	phone: string;
}

// function prtKey<T extends object>(params: T, key: string): string {
// 	console.log(params[key]);
// 	return params[key];
// }
function prtKey<T extends object, U extends keyof T>(params: T, key: U): T[U] {
	console.log(params[key]);
	return params[key];
}

prtKey<IOb1, keyof IOb1>({ name: "taehyeong", age: 25 }, "name");
prtKey<IOb2, keyof IOb2>({ city: "seoul", phone: "01012342345" }, "phone");


// 6
class ClassName<T> {
	constructor(private _data: T) {}

	set data(newData: T) {
		this._data = newData;
	}

	get data(): T {
		return this._data;
	}
}