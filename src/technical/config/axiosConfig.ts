import axios from "axios";

export const baseUrl = "http://192.168.10.102:8080";

export const headerJWT = "Authorization";
export const headerXSRF = "X-XSRF-TOKEN";

const instance = axios.create({
  baseURL: baseUrl + "/api",
  // timeout: 2000
});

console.log("***baseUrl***", baseUrl);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      // const gotToLogin = async () => {
      //   const userLogin = await getData(USER_LOGIN);
      //   navigate("Login", {userLogin});
      // }
      // gotToLogin();
    }
    return Promise.reject(error);
  },
);

export const setAuthHeaders = (jwt: string, xsrf: string) => {
  instance.defaults.headers.common[headerJWT] = jwt;
  instance.defaults.headers.common[headerXSRF] = xsrf;
};

export const clearAuthHeaders = () => {
  instance.defaults.headers.common[headerJWT] = "";
  instance.defaults.headers.common[headerXSRF] = "";
};

export default instance;
