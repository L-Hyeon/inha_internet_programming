import Hooks from "../libs/Hooks";

export function load() {
	return Hooks.getItems(1)
		.then((res) => {
			return { list: res.data.products };
		})
		.catch((err) => {
			return { list: [] };
		});
}
