// const testText = document.querySelector("#someText")!;
// const testText = document.querySelector("#someText") as HTMLElement;
// console.log(testText?.id);
// console.log((testText as HTMLElement).id);

// 타입 단언

interface IExam {	// 넘버 타입 프로퍼티 들어가 있는 객체 틀
	value: number;
}
const example: object = { value: 1 };
// console.log(example.value);
// object안에 'value' key가 보장이 되지않기에 빨간줄 뜬다

// 1 as
console.log((example as IExam).value);
// 2 <>
console.log((<IExam>example).value);


interface IExam {
	value: number;
}
const example1: object = { value: 1 } as IExam;
// 1 as
console.log((example1 as IExam).value);
// 2 <>
console.log((<IExam>example1).value);