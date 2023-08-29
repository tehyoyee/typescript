class UserInfo {
    constructor(name, age, phone) {
        this.name = name;
        this._age = age;
        this._phone = phone;
    }
    // 특정 포맷 필요
    get phone() {
        return (this._phone.slice(0, 3) + " - " +
            this._phone.slice(3, 7) + " - " +
            this._phone.slice(7, 12));
    }
    // 인자의 조건이 있는 경우: 속력, 나이, 넓이 -> 데이터 무결성
    set phone(newPhone) {
        this._phone = newPhone;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        this._age = newAge;
    }
}
const user = new UserInfo("태형", 25, "01011112222");
user.age = -27; // setter가 없다면 데이터무결성에 문제
console.log(user.name, user.age, user.phone);
