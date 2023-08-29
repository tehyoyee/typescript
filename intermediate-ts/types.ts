// 자주 쓰이지는 않지만 유용

interface IUser {
	name: string;
	age: number;
}

interface IBook {
	title: string;
	price: number;
}

interface ICart {
	userName: string;
	bookName: string;
}

interface IUserCartService {
	user: IUser;

	book: IBook;

	cart: ICart;
}

function login(params: IUserCartService["user"]) {
	console.log(params);
}
login({ name: "taehyeong", age: 33});

function searchBook(params: IUserCartService["book"]) {
	console.log(params);
}
searchBook({ title: "TypeScript", price: 33000 });

function addBookToMyCart(params: IUserCartService["cart"]) {
	console.log(params);
}
addBookToMyCart({ userName: "taehyeong", bookName: "TypeScript" });