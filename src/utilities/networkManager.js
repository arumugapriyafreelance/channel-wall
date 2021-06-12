import axios from "axios";
import Utility from "./utility";
import { store } from "../store/configStore";
import loginApi from "../api/loginApi";

const setHeaders = (isAuthRequired) => {
  return new Promise((resolve, reject) => {
    if (isAuthRequired) {
      let user = window.sessionStorage.getItem("userToken");
      user = user
        ? JSON.parse(user)
        : store.getState().loginReducer.sessionDetails.token;
      resolve({
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.access_token,
      });
      // var user1 = window.sessionStorage.getItem("user");
      // let difference;
      // let user;
      // if (user) {
      //   // user = JSON.parse(window.sessionStorage.getItem("user"));
      //   difference =
      //     Math.abs(new Date().getTime() - new Date(user.loginTime).getTime()) /
      //     1000;
      //   if (difference > user.expiresIn - 10) {
      //     return loginApi
      //       .refreshToken(user)
      //       .then((LoginDetail) => {
      //         let user1 = {
      //           ...LoginDetail.data.data,
      //           refreshToken: user.refreshToken,
      //         };
      //         user1.loginTime = new Date();
      //         window.sessionStorage.setItem("userToken", JSON.stringify(user1));
      //         resolve({
      //           "Content-Type": "application/json",
      //           Authorization: "Bearer " + user1.accessToken,
      //         });
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //         reject(err);
      //       });
      //   }
      // }
    } else {
      resolve({
        "Content-Type": "application/json",
      });
    }
  });
};

const logError = (error) => {
  if (error["response"]) {
    console.log("Status code", error.response.status);
    console.log("Response data", error.response.data);
  } else {
    console.log("Most likely a server timeout or an internet connection error");
  }
};

class NetworkManager {
  static get(url, isAuthRequired = true, params = {}, cancelToken) {
    let config = {};
    return setHeaders(isAuthRequired)
      .then((headers) => {
        config["headers"] = headers;
        config["params"] = new URLSearchParams(params);
        config["cancelToken"] = cancelToken ? cancelToken : null;
        return axios.get(url, config);
      })
      .catch((err) => {
        if (
          err.response &&
          (err.response.status == 401 || err.response.status == 403)
        ) {
          window.location.assign(window.location.origin + "/#/sessionExpired");
        }
        logError(err);
        throw err;
      });
  }
  static post(url, data, isAuthRequired = true, params = {}) {
    let config = {};
    return setHeaders(isAuthRequired)
      .then((headers) => {
        config["headers"] = headers;
        config["params"] = params;
        return axios.post(url, data, config);
      })
      .catch((err) => {
        if (
          err.response &&
          (err.response.status == 401 || err.response.status == 403)
        ) {
          window.location.assign(window.location.origin + "/#/sessionExpired");
        }
        logError(err);
        throw err;
      });
  }

  static postMultipart(url, data, isAuthRequired = true, params = {}) {
    let token = JSON.parse(window.sessionStorage.getItem("userToken"));
    let config = {};
    return setHeaders(isAuthRequired)
      .then((headers) => {
        config["headers"] = {
          "Content-Type": "multipart/form-data; boundary=MultipartBoundary",
          Authorization: "Bearer " + token.access_token,
        };
        return axios.post(url, data, config);
      })
      .catch((err) => {
        if (
          err.response &&
          (err.response.status == 401 || err.response.status == 403)
        ) {
          window.location.assign(window.location.origin + "/#/sessionExpired");
        }
        logError(err);
        throw err;
      });
  }

  static put(url, data, isAuthRequired = true, params = {}) {
    let config = {};
    return setHeaders(isAuthRequired)
      .then((headers) => {
        config["headers"] = headers;
        config["params"] = params;
        return axios.put(url, data, config);
      })
      .catch((err) => {
        if (
          err.response &&
          (err.response.status == 401 || err.response.status == 403)
        ) {
          window.location.assign(window.location.origin + "/#/sessionExpired");
        }
        logError(err);
        throw err;
      });
  }
  static delete(url, isAuthRequired = true, params = {}, data) {
    let config = {};
    return setHeaders(isAuthRequired)
      .then((headers) => {
        config["headers"] = headers;
        config["params"] = params;
        config["data"] = data;
        return axios.delete(url, config);
      })
      .catch((err) => {
        if (
          err.response &&
          (err.response.status == 401 || err.response.status == 403)
        ) {
          window.location.assign(window.location.origin + "/#/sessionExpired");
        }
        logError(err);
        throw err;
      });
  }

  static downloadLocally(url) {
    return axios({
      url: url,
      method: "GET",
      responseType: "blob",
    });
  }
}

export default NetworkManager;
