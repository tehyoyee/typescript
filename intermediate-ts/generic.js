function printType(params) {
    console.log(typeof params);
}
printType("아무거나");
printType(23);
printType({});
function prt1(params) {
    console.log(params.data);
}
function prt2(params) {
    console.log(params.data);
}
prt2({ data: 123 });
function prt3(params) {
    console.log(typeof params.data);
}
function prt4(params) {
    console.log(typeof params.data);
}
prt3({ data: [123, 456, 789], name: "taehyeong" });
prt4({ data: ["asdf", "zxcv", "qwer"], name: 1234 });
