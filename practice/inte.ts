interface ICar {
	name: string;
	speed: number;
}
const car = { speed: 0, name: "" };

const carProxy: ICar = new Proxy<ICar>(car, {
	get(target, p) {
		console.log("get", target, p);
	},
	set(target, p, newValue){
		console.log("get", target, p, newValue);
		return true;
	},
});

carProxy.speed = 30;
console.log(carProxy.speed);