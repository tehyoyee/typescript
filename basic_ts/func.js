function add(a, b) {
    return a + b;
}
function add2(a, b) {
    return String(a + b);
}
function add3(a, b) {
    return; // void
}
const minus = (a, b) => String(a - b); // minus 함수에 대한 타입이 안달려있다
const minus2 = (// minus2 함수에 대한 타입을 달았다
a, b) => String(a - b);
// 함수안에 함수 : 복잡
const multiple = (// input type
a, b) => {
    return () => {
        return a * b * 2;
    };
};
console.log(add(1, 3));
console.log(multiple(1, 3));
// 타입 별칭 지정하여 간단하게..
const multiple2 = (a, b) => {
    return () => {
        return a * b * 2;
    };
};
// 타입별칭 :
// 함수
// 타입이 길어질 때 "hello" | "world" | "hi" || "hi2" ...
// 쓴다.
function sendError() {
    console.log("에러 발생");
    return;
}
function sendError2() {
    throw { errorCode: 500, message: "internal server error" };
}
const result = sendError();
const result2 = sendError2();
console.log("result :", result);
console.log("result :", result2);
