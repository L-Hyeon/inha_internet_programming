import Hooks from "../../../libs/Hooks.js";

export function load({ params }) {
	const response = Hooks.getWordDetail(Number(params.id)).then((res) => {
		if (res.status === 200) {
			return res.data;
		} else {
			return {};
		}
	});
	return { id: params.id, item: response };
}
