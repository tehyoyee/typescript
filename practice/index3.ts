interface IAdd {
	a: number;
	b: number;
	getResult(): number;
}

function add3(a: number, b: number):void {
	this.a = a;
	this.b = b;

	this.getResult = ():number => {
		return this.a + this.b;
	};
}

const temp5: IAdd = new add3(1, 2);
const temp6: IAdd = new add3(4, 5);

console.log(temp5, temp6);