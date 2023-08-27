
// 생략
// ID: "asdf" 이런식으로 안써줘도된다.
// const ID = "yongsoo";

const register = (ID, PW) => ({ ID, PW });
console.log(register("yongsoo1", 00001));

// 2. 객체
const { name, age, sex } = {
	name: "yongsoo",
	age: 25,
	sex: "male",
};
console.log(name, age, sex);

// 3. 배열
const [first, second, third] = [true, false, "hi"];
console.log(first, second, third);

// 4. spread 연산자 "..."
const [first2, ...rest] = [true, false, "hi"];
console.log(first2, rest);

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];
console.log(arr2);


// 2. 객체 + spread
const { name2, ...rest2 } = {
	name2: "yongsoo",
	age: 25,
	sex: "male",
};
console.log(name2, rest2);
console.log({
	...rest2, height:155,
})