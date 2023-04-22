import axios from "axios";
import * as UserInfo from "../stores/UserStore";

const parseJwt = (token: string) => {
	let base64Url = token.split(".")[1];
	let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	let jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);

	return JSON.parse(jsonPayload);
};

const instance = axios.create({
	baseURL: "https://dummyjson.com",
	timeout: 3000,
});

instance.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response.status === 403) {
			Hooks.refresh().then((res) => {
				if (res.status === 200) {
					return axios(error.config);
				}
			});
		}
		return Promise.reject(error);
	}
);

const Hooks = {
	login: async () => {
		return;
	},
	register: async () => {
		return;
	},
	refresh: async () => {
		return instance
			.get("/refresh")
			.then((res) => {
				if (res.status === 200) {
					instance.defaults.headers.common[
						"Authorization"
					] = `Bearer ${res.data.accessToken}`;
					UserInfo.accessToken.set(res.data.accessToken);
					UserInfo.refreshToken.set(res.data.refreshToken);
				}
			})
			.catch((error) => {
				return error.response;
			});
	},
	getItems: async (page: number) => {
		return instance
			.get(`/products?limit=12&skip=${(page - 1) * 12}`)
			.catch((error) => {
				return error.response;
			});
	},
	getItemDetail: async (itemId: number) => {
		return instance.get(`/products/${itemId}`).catch((error) => {
			return error.response;
		});
	},
};

export default Hooks;
