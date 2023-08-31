// 다른 파일 함수 쓸 때 임포트 익스포트
// 적으면 이거
// import { add, minus } from "./module1";

// console.log(add(1, 2), minus(3, 1));
// 많으면 이거
import * as MATH from "./module1";

console.log(MATH.TAEHYEONGMATH.add(1, 2), MATH.TAEHYEONGMATH.minus(3, 1));