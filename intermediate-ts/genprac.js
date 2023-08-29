// 2
function returnParams(params) {
    return params;
}
returnParams("hi");
returnParams(25);
returnParams(true);
// 3
var rP = returnParams;
// function prtKey<T extends object>(params: T, key: string): string {
// 	console.log(params[key]);
// 	return params[key];
// }
function prtKey(params, key) {
    console.log(params[key]);
    return params[key];
}
prtKey({ name: "taehyeong", age: 25 }, "name");
prtKey({ city: "seoul", phone: "01012342345" }, "phone");
