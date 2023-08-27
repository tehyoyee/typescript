// 성별, 부서코드, 카테고리, ...
// 자바스크립트에는 Enum타입이 없다. 고로 js로 변환시 함수로 구현된다.
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["H"] = "H";
    categoryEnum["K"] = "K";
    categoryEnum["S"] = "S";
})(categoryEnum || (categoryEnum = {}));
const category = categoryEnum.K;
// 웹 앱
// -- 기준선
// 서버
function cate(category) {
    if (category === "H") {
        console.log("5% 할인");
    }
    else if (category === "K") {
        console.log("10% 할인");
    }
    else if (category === "S") {
        console.log("20% 할인");
    }
    else {
        console.log("서버 멈춤");
    }
}
cate(category);
// 리터럴 타입
var sexEnum;
(function (sexEnum) {
    sexEnum["MALE"] = "MALE";
    sexEnum["FAMALE"] = "FEMALE";
    sexEnum["ETC"] = "ETC";
})(sexEnum || (sexEnum = {}));
const sex = "MALE"; // 일회용
const sex2 = sexEnum.MALE; // 정상
