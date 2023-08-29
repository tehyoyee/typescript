// keyof Type
// 객체내의 키들만 들어올 수 있음.
// 찾기 기능할 때 써야할듯?

interface IBook {
	title: string;
	publisher: string;
	price: number;
	author: string;
}

function prt(params: IBook, key: keyof IBook) {
	console.log(params[key]);
}

prt(
	{
	title: "TS 배우기",
	publisher: "인프런",
	price: 123124,
	author: "김태형",
	},
	"title"
);