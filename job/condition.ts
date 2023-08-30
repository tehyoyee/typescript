interface ICity {
	name: string;
}

interface ISchool extends ICity {
	year: number;
}

console.log(false ? "truevalue" : "failvalue");
type ConditionType = ISchool extends ICity ? number : string;
// ISchool extends ICity 가 참이면 number 거짓이면 string
const test: ConditionType = 1234;
// 상속이 많아질때 유용할 수 있다