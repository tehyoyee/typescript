// let color: string;

// color = "red";
// color = "#ffffff";
// color = "rgba(0, 0, 0, 0.5)";

// color를 나타내는 값들이 너무 다양하다. 하나로 통일하자 #ffffff형태로.

function getColor(color: `#${string}`): `#${string}` | undefined {
	if (color.length === 7) {
		return color;
	}
}

// color = "red";
const color = getColor("#ffffff");
console.log(color);
// color = "rgba(0, 0, 0, 0.5)";
