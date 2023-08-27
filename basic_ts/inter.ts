// 명세, 타입, 클래스를 만들때



// 인터페이스로 타입 명시 틀.
interface IPerson {
	name: string;
	age: number;
	city?: string;
}

const man = {
	name: "taehyeong",
	age: 25,
	// city: "Seoul",
};



// 객체 생성시 바로 타입 정해주기
const man2: { name2: string; age2: number; city2?: string} = {
	name2: "taehyeong",
	age2: 25,
	city2: "Seoul",
};

// 웹 앱
// 경계선 //
// 서버

function prt(params: IPerson) {
	console.log(params?.city ?? 'default city');
}

prt(man);