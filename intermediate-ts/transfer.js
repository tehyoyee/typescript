// 서버에서 다른 서버로 정보
// 프론트에서 서버로 부터 받을 때 -> json object
// key-point : readonly, constructor 축약 및 default값, getter, setter
class LoginDataTransferObject2 {
    constructor(ID, PW) {
        this.ID = ID;
        if (PW)
            this.PW = PW;
    }
}
class LoginDataTransferObject {
    constructor(ID, PW = "default value") {
        this.ID = ID;
        this.PW = PW;
    }
}
const LoginDTO = new LoginDataTransferObject("hi");
// LoginDTO.PW = "set";
console.log(LoginDTO);
class LoginDataTransferObject3 {
    constructor(ID, PW = "default password") {
        this.ID = ID;
        this.PW = PW;
    }
}
const LoginDTO3 = new LoginDataTransferObject3("hi");
console.log(LoginDTO3);
