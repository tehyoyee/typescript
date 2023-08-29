// extends 키워드 : 1. 제한 안정성  2. 보장

// 1
function asdf<T extends string | number>(params: T) {
	if (typeof params === "string") console.log("문자열 입니다");
	else if (typeof params === "number") console.log("숫자입니다");
}

asdf<string>("하하하");
asdf<number>(123);

function zxcv<T extends string | number, U extends boolean | object>(params: T, params2: U) {
	if (typeof params === "string") console.log("문자열 입니다");
	else if (typeof params === "number") console.log("숫자입니다");

	if (typeof params === "boolean") console.log("불 입니다");
	else if (typeof params === "object") console.log("객체 입니다");
}

zxcv<string, boolean>("하하하", true);
zxcv<number, object>(123, {});

// 2 보장
interface IHi {
	hi: (name: string) => void;
}

function execute<T extends IHi>(params: T) {	// IHi 로 형 보장
	params.hi("taehyeong");
}
execute({
	hi(name: string) {
		console.log("hi!", name);
	},
})