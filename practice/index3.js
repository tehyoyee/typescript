function add3(a, b) {
    var _this = this;
    this.a = a;
    this.b = b;
    this.getResult = function () {
        return _this.a + _this.b;
    };
}
var temp5 = new add3(1, 2);
var temp6 = new add3(4, 5);
console.log(temp5, temp6);
