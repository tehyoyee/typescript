// extends 키워드 : 1. 제한 안정성  2. 보장
// 1
function asdf(params) {
    if (typeof params === "string")
        console.log("문자열 입니다");
    else if (typeof params === "number")
        console.log("숫자입니다");
}
asdf("하하하");
asdf(123);
function zxcv(params, params2) {
    if (typeof params === "string")
        console.log("문자열 입니다");
    else if (typeof params === "number")
        console.log("숫자입니다");
    if (typeof params === "boolean")
        console.log("불 입니다");
    else if (typeof params === "object")
        console.log("객체 입니다");
}
zxcv("하하하", true);
zxcv(123, {});
function execute(params) {
    params.hi("taehyeong");
}
execute({
    hi: function (name) {
        console.log("hi!", name);
    },
});
