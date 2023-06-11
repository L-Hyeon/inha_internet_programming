import axios from "axios";
import {
  accessToken,
  isAdmin,
  isLoggedIn,
  uid,
  studies,
} from "../stores/UserStore";

// const parseJwt = (token: string) => {
// 	let base64Url = token.split(".")[1];
// 	let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
// 	let jsonPayload = decodeURIComponent(
// 		window
// 			.atob(base64)
// 			.split("")
// 			.map(function (c) {
// 				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
// 			})
// 			.join("")
// 	);

// 	return JSON.parse(jsonPayload);
// };

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 3000,
});

// instance.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	(error) => {
// 		if (error.response.status === 403) {
// 			Hooks.refresh().then((res) => {
// 				if (res.status === 200) {
// 					return axios(error.config);
// 				}
// 			});
// 		}
// 		return Promise.reject(error);
// 	}
// );

const Hooks = {
  login: async (userid: string, pw: string) => {
    return instance
      .post(`/login/`, { uid: userid, pw: pw })
      .then((res) => {
        isLoggedIn.set(true);
        accessToken.set(res.data.Token);
        uid.set(res.data.uid);
        isAdmin.set(res.data.isAdmin);
        instance.defaults.headers.common["Authorization"] = res.data.Token;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
  },
  register: async (userid: string, pw: string) => {
    return instance
      .post(`/register/`, { uid: userid, pw: pw })
      .then((res) => {
        isLoggedIn.set(true);
        accessToken.set(res.data.Token);
        uid.set(res.data.uid);
        isAdmin.set(res.data.isAdmin);
        instance.defaults.headers.common["Authorization"] = res.data.Token;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
  },
  // refresh: async () => {
  // 	return instance
  // 		.get("/refresh")
  // 		.then((res) => {
  // 			if (res.status === 200) {
  // 				instance.defaults.headers.common[
  // 					"Authorization"
  // 				] = `Bearer ${res.data.accessToken}`;
  // 				UserInfo.accessToken.set(res.data.accessToken);
  // 				UserInfo.refreshToken.set(res.data.refreshToken);
  // 			}
  // 		})
  // 		.catch((error) => {
  // 			return error.response;
  // 		});
  // },
  addUser: async (userid: string, pw: string) => {
    return instance.post(`/register/`, { uid: userid, pw: pw }).catch((e) => {
      console.log(e);
      return e.response;
    });
  },
  getUsers: async (page: number) => {
    return instance.get(`/user/${page}`).catch((error) => {
      return error.response;
    });
  },
  deleteUser: async (id: number) => {
    return instance.delete(`/user/delete/${id}`).catch((error) => {
      return error.response;
    });
  },
  addWord: async (word: string, kor: string, eng: string) => {
    return instance
      .post(`/word/add/`, { word: word, kor: kor, eng: eng })
      .catch((error) => {
        return error.response;
      });
  },
  modifyWord: async (id: number, word: string, kor: string, eng: string) => {
    return instance
      .post(`/word/modify/${id}`, { word: word, kor: kor, eng: eng })
      .catch((error) => {
        return error.response;
      });
  },
  deleteWord: async (id: number) => {
    return instance.delete(`/word/delete/${id}`).catch((error) => {
      return error.response;
    });
  },
  getWords: async (page: number) => {
    return instance.get(`/word/${page}`).catch((error) => {
      return error.response;
    });
  },
  getWordDetail: async (wid: number) => {
    return instance.get(`/word/info/${wid}`).catch((error) => {
      return error.response;
    });
  },
  addStudy: async (wid: number) => {
    return instance.post(`/study/add/`, { wid: wid }).catch((error) => {
      return error.response;
    });
  },
  deleteStudy: async (wid: number) => {
    return instance.delete(`/study/delete/${wid}`).catch((error) => {
      return error.response;
    });
  },
  getStudies: async (page: number) => {
    return instance.get(`/study/${page}`).catch((error) => {
      return error.response;
    });
  },
  getAllStudies: async () => {
    return instance
      .get(`/study/all`)
      .then((res) => {
        studies.set(res.data);
      })
      .catch((error) => {
        return error.response;
      });
  },
  addNotice: async (title: string, content: string) => {
    return instance
      .post(`/notice/add/`, { title: title, content: content })
      .catch((error) => {
        return error.response;
      });
  },
  modifyNotice: async (id: number, title: string, content: string) => {
    return instance
      .post(`/notice/modify/${id}`, { title: title, content: content })
      .catch((error) => {
        return error.response;
      });
  },
  deleteNotice: async (id: number) => {
    return instance.delete(`/notice/delete/${id}`).catch((error) => {
      return error.response;
    });
  },
  getNotice: async (id: number) => {
    return instance.get(`/notice/info/${id}`).catch((error) => {
      return error.response;
    });
  },
  getNotices: async (page: number) => {
    return instance.get(`/notice/${page}`).catch((error) => {
      return error.response;
    });
  },
};

export default Hooks;
