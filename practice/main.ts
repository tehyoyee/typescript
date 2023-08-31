import { ICalculator } from "./cal";
import { CalculatorImpl } from "./calImpl";

// interface 이용 명세 및 설계.
// interface 구현 클래스
// main에서 쓸 때 타입은 인터페이스로.
const cal: ICalculator = new CalculatorImpl();
console.log(cal.add(1, 2));
console.log(cal.minus(7, 2));
console.log(cal.multiple(3, 5));

// OOP설계는 결합도가 쎄지 않으면서 확장할 수 있는 것.
// 결합도가 너무 높으면 수정하기 어렵다.
// 결합도를 낮추자 ! 그래서 이런 설계.

// CalImpl.v2.ts를 또 만들어서
// 새로운 요구에 부응할 수 도 있고
// 이전으로 되돌릴 수도 있다

// cal 에다가 CalculatorImplV1 이나
// 				CalculatorImplV2 나
//				CalculatorImplV3 막 바꿔 끼울 수 있다.