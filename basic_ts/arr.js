const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3]; // 제네릭타입은 잘 안씀
const arr3 = ["hi", "hello", "world"];
const arr4 = ["hi", "hello", "world"];
const arr5 = [
    {
        name: "taehyeong",
        age: 25,
        city: "Seoul"
    },
    {
        name: "taehyeong",
        age: 25,
    },
    {
        name: "taehyeong",
        age: 25,
        city: "Seoul"
    },
];
arr5.forEach((e) => { var _a; return console.log((_a = e === null || e === void 0 ? void 0 : e.city) !== null && _a !== void 0 ? _a : "default"); });
// 튜플 - 배열의 길이 length 와 안에 원소를 바꿀 수 없는... 불변성 유지 실제로 거의 안씀
// 자바스크립트엔 없다
const arr6 = [1, "hi", {}, []];
console.log(arr6);
arr6.push("asdf"); // 근데 새로 푸쉬해도 들어간다..; 한계
console.log(arr6);
