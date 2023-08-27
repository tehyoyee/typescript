const ob = {
	name: "taehyeong",
	age: 25,
	uni: "cau",
	major: "sw",
};

// console.log(ob.country);
// console.log(ob.name);
console.log(ob.country?.hi.hello.how.are.you);	// optional chaining
console.log(ob.country ?? "seoul");		// 널 병합 연산자

console.log(ob.country ? ob.country : "seoul");  // 삼항연산자
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining