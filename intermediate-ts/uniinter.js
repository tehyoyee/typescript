// 1. union 합집합 | (OR)
let nameOrAge;
nameOrAge = "taehyeong";
nameOrAge = 25;
function prtUnion(params) {
    // name 정보가 들어왔을 때 로직
    if ("name" in params) {
        console.log(params.name);
    }
    if ("age" in params) {
        console.log(params.age);
    }
}
prtUnion({ name: "taehyeong" });
// 2. intersection 교집합 & (AND)
const nameAndAge = {
    name: "taehyeong",
    age: 26,
};
function search(params) {
    console.log(params.age + " " + params.name);
}
search({ age: 23, name: "taehyeong" });
