// 어댑터 패턴. 전에 사용하던것과 다르면 연결해주는 역할
// Impl2에 implements ICalculator2 빼고
// Adapter 가 대신 ICalculator2 를 Impl함
// Impl내용으로는 기존 CalculatorImpl을 활용
 
interface ICalculator2 {			 // 새로워짐
	addAandB(a: number, b: number): number;

	minusAandB(a: number, b: number): number;

}

class CalculatorImpl2 {	// 기존에 있던 것
	add(a: number, b: number): number {
		return a + b;
	}

	minus(a: number, b: number): number {
		return a - b;
	}
}

class Adapter extends CalculatorImpl2 implements ICalculator2 {
	addAandB(a: number, b: number): number {
		return this.add(a, b);
	}

	minusAandB(a: number, b: number): number {
		return this.minus(a, b);
	}
}

const cal: ICalculator2 = new Adapter();
console.log(cal.addAandB(1, 2));
console.log(cal.minusAandB(4, 3));