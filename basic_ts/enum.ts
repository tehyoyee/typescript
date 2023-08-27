// 성별, 부서코드, 카테고리, ...
// 자바스크립트에는 Enum타입이 없다. 고로 js로 변환시 함수로 구현된다.

enum categoryEnum {
	H = "H",
	K = "K",
	S = "S",
}

const category: categoryEnum = categoryEnum.K;

// 웹 앱
// -- 기준선
// 서버

function cate(category: any) {
	if (category === "H") {
		console.log("5% 할인")
	} else if (category === "K") {
		console.log("10% 할인");
	} else if (category === "S") {
		console.log("20% 할인");
	} else {
		console.log("서버 멈춤");
	}
}
cate(category);


// 리터럴 타입

enum sexEnum {
	MALE = "MALE",
	FAMALE = "FEMALE",
	ETC = "ETC",
}

const sex: "MALE" | "FEMALE" | "ETC" = "MALE";	// 일회용
const sex2: sexEnum = sexEnum.MALE;				// 정상
