// 서버에서 다른 서버로 정보
// 프론트에서 서버로 부터 받을 때 -> json object
// key-point : readonly, constructor 축약 및 default값, getter, setter

class LoginDataTransferObject2 {

	public readonly ID;		// readonly 정보 전달만 할때 readonly
	public readonly PW;		// private보다 더 강력 수정불가

	constructor(ID: string, PW?: string) {
		this.ID = ID;
		if (PW) this.PW = PW;
	}
}

class LoginDataTransferObject {
	constructor(
		public readonly ID: string,
		public readonly PW: string = "default value"
	) {}
}

const LoginDTO = new LoginDataTransferObject("hi");
// LoginDTO.PW = "set";
console.log(LoginDTO);



class LoginDataTransferObject3 {

	public readonly ID;		// readonly 정보 전달만 할때 readonly
	public readonly PW;		// private보다 더 강력 수정불가

	constructor(ID: string, PW: string = "default password") {
		this.ID = ID;
		this.PW = PW;
	}
}

const LoginDTO3 = new LoginDataTransferObject3("hi");
console.log(LoginDTO3);