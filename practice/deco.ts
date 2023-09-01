export function Builder<T extends { new (...args: any[]): {}}>(
	constructor: T
) {

	const keys = Object.keys(new constructor());

	return class extends constructor {
		static Builder = class {
			constructor() {
				for(let key of keys) {
					Object.defineProperties(this, {
						["_" + key]: {
							value: this[key],
							enumerable: true,
							writable: true,
						},
						[key]: {
							value: (newValue: any) => {
								this["_"+key] = newValue;
								return this;
							},
							enumerable: true,
						},
					})
				}
			}

			build() {
				return new constructor(
					...Object.keys(this)
					.filter((e) => (e.startsWith("_") ? true : false))
					.map(e => this[e])
				);
			}
		};
	}
}