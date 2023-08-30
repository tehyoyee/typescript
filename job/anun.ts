// any unknown

// any : 어떤 것이든 들어와라 괜찮다
const user: any = {
	ID: "taehyeong",
};
console.log(user.name);
console.log(user.length);


// unknown : 이거 뭔지 모르겠다 주의할거다. 에러 띄운다
// 외부에서 끌어올때 뭐가 들어올지 정말 모르겠어서
// 받아보고 해결하겠다 뭐 이런 경우... 거의 안쓴다~
const newUser: unknown = {
	ID: "taehyeong",
};
console.log(newUser.ID);
console.log(newUser.name);
console.log(newUser.length);
