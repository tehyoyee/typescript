
interface IName {
	name: string;
}
interface IAge {
	age: number;
}

// 1. union 합집합 | (OR)
let nameOrAge: string | number;
nameOrAge = "taehyeong";
nameOrAge = 25;

function prtUnion(params: MyType) {		// 실무에서 많이 쓴다. UPDATE 할때 쓰면 좋을듰?
	// name 정보가 들어왔을 때 로직
	if ("name" in params) {
		console.log(params.name);
	}

	if ("age" in params) {
		console.log(params.age);
	}
}
type MyType = IName | IAge;
prtUnion({ name: "taehyeong"} );



// 2. intersection 교집합 & (AND)
const nameAndAge: IName & IAge = {
	name: "taehyeong",
	age: 26,
};

type ForSearch = IName & IAge;

function search(params: ForSearch) {
	console.log(params.age + " " + params.name);
}

search({ age: 23, name: "taehyeong"});