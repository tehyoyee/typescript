function printType(params: any) {
	console.log(typeof params);
}

printType("아무거나");
printType(23);
printType({});

interface IGene {
	data: string | number;
}

function prt1(params: any) {
	console.log(params.data);
}

interface IGene2<T> {	// generic    Type T : 관례적
	data: T;
}

function prt2(params: IGene2<number>) {
	console.log(params.data);
}

prt2( {data: 123 });

interface IGene3<T, U> {	// generic    Type T : 관례적
	data: Array<T>;
	name: U;
}

function prt3(params: IGene3<number, string>) {
	console.log(typeof params.data);
}

function prt4(params: IGene3<string, number>) {
	console.log(typeof params.data);
}

prt3({ data: [123, 456, 789], name: "taehyeong" });
prt4({ data: ["asdf", "zxcv", "qwer"] , name: 1234})