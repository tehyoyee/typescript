// 키값의 중복 ?

interface IName {
	name: string;
}

interface ISchool {
	school: string;
}

interface ICity {
	city: string;
}

function prt(params: IName | ISchool | ICity) {
	if ("name" in params) console.log(params.name);
	else if ("school" in params) console.log(params.school);
	else if ("city" in params) console.log(params.city);
}
prt({ city: "Seoul" });

// 여러가지 타입을 받아 작동하는 함수. 타입수가 적으면 괜찮다.

// => ISuperKey 하나로 축약 가능


interface ISuperKey {
	[props: string]: string;
}

function prt2(params: ISuperKey) {
	if ("name" in params) console.log(params.name);
	else if ("school" in params) console.log(params.school);
	else if ("city" in params) console.log(params.city);
	else console.log("error 500");
}
prt2({ citfy: "Seoulf" });
