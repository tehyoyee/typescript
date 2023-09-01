// index4.ts

import { Builder } from "./deco";

export class UserEntity {
	
	name?: string;
	age?: number;
	marketing?: boolean;

	constructor(name?: string, age?: number, marketing?: boolean) {
		if (name) this.name = name;
		if (age || typeof age === "number") this.age = age;
		if (marketing != undefined) this.marketing = marketing;	// undefined이면 안만들어질 수 있따. if추가
	}

	// constructor(			// 이렇게 하면 코드는 간단하지만 undefined가 들어간다.
	// 	public name: string,	// undefined 없는 것이 선호된다.
	// 	public age: number,
	// 	public marketing: boolean
	// ) {}

	// Builder 패턴
	static Builder = class {
		private _name?: string;
		private _age?: number;
		private _marketing?: boolean;

		// 원래 class의 필드와 이름이 같은 함수 ! ~ 메소드
		name(newName: string) {
			this._name = newName;

			return this;
		}
		age(newAge: number) {
			this._age = newAge > 0 ? newAge : 0;

			return this;
		}
		marketing(newMarketing: boolean) {
			this._marketing = newMarketing;

			return this;
		}

		build(): UserEntity{
			return new UserEntity(this._name, this._age, this._marketing);
		}
	};
}

class BuilderInit {
	static Builder = class {
		build() {}

		[props: string]: Function;
	}
}

@Builder
export class PostEntity extends BuilderInit {
	constructor(
		public title: string, 
		public content: string,
		public author: string
	) {
		super();
	}
}

@Builder
export class TimeEntity extends BuilderInit {
	constructor(public hi: string) {
		super();
	}
}