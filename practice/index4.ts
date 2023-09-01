import { TimeEntity, PostEntity, UserEntity } from "./builder"

// 인스턴스만들 때 Builder 패턴.
// 빌더 패턴 들어가는 변수를 명시적으로 알 수 있다.
// UserEntity : UserEntity 를 위한 Builder 패턴 직접 명시 undefined 처리 가능
// PostEntity, TimeEntity : Builder Decorator를 명시. undefined는 못 거르지만 데코레이터로 Builder패턴 편하게 쓸 수 있음.
const newUser: UserEntity = new UserEntity.Builder()
	.name("taehyeong")
	.age(- 6)
	.marketing(true)
	.build();

const newPost = new PostEntity.Builder()
	.title("hello world")
	.content("asdf")
	.build();

const newTime = new TimeEntity.Builder().hi("is this work?").build();
console.log(newUser);
console.log(newPost);