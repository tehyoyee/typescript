// 인스턴스가 하나 생성되게 보장.
// 의존성 주입과 연관
// new 를 못쓰게 한다.
// 자기자신이 인스턴스를 만들어야한다. -> private constructor

class Singleton {
	// private static _instance: Singletone;
	private static _instance = new Singleton();

	private constructor() {
		console.log("싱글톤 생성 !!");
	}

	public static getInstance() {
		// if (this._instance) {
		// 	return this._instance;
		// }
		// this._instance = new Singleton();
		return this._instance;
	}
}

const single1: Singleton = Singleton.getInstance();