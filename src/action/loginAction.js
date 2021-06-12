// import loginApi from "../api/loginApi";
// import { Toasts } from "../components/common";
// import {
//   Admin_Role_Types,
//   User_Profile_Status,
//   CLIENT,
// } from "../utilities/constants";
// var CryptoJS = require("crypto-js");
// import Utility from "../utilities/utility";
// import * as loginActionTypes from "./actionTypes/loginActionType";

// export function login(loginDetails) {
//   var encrypted = CryptoJS.AES.encrypt(
//     JSON.stringify(loginDetails),
//     CryptoJS.enc.Utf8.parse("2HOwmMKZS1wWvq6qxdeA5moUCubLJiXV"),
//     {
//       mode: CryptoJS.mode.ECB,
//       padding: CryptoJS.pad.Pkcs7,
//     }
//   ).toString();
//   var encryptData = { data: encrypted };
//   return function(dispatch) {
//     return loginApi.login(encryptData);
//   };
// }

// export function forgetPassword(email) {
//   var encrypted = CryptoJS.AES.encrypt(
//     JSON.stringify(email),
//     CryptoJS.enc.Utf8.parse("2HOwmMKZS1wWvq6qxdeA5moUCubLJiXV"),
//     {
//       mode: CryptoJS.mode.ECB,
//       padding: CryptoJS.pad.Pkcs7,
//     }
//   ).toString();
//   var encryptData = { data: encrypted };
//   return function(dispatch) {
//     return loginApi.forgetPassword(encryptData);
//   };
// }

// export function logout() {
//   let formData = new FormData();
//   let token = JSON.parse(sessionStorage.getItem("userToken"))["access_token"];
//   console.log(process.env.REACT_APP_SERVER_URL, "process");
//   formData.append("token", token);
//   formData.append("client_id", CLIENT.ID);
//   formData.append("grant_type", "password");
//   formData.append("client_secret", CLIENT.SECRET);
//   return async function(dispatch) {
//     try {
//       const response = await loginApi.logout(formData);
//       dispatch({
//         type: loginActionTypes.RESET_STATE,
//         payload: undefined,
//       });
//     } catch (err) {
//       let message = err?.response?.data?.message;
//       message && Toasts.error(message);
//     }
//   };
// }

// export function generateQr() {
//   return function(dispatch) {
//     return loginApi.generateQr();
//   };
// }

// export function validate2FA(otpValue) {
//   let encrypted = CryptoJS.AES.encrypt(
//     JSON.stringify(otpValue),
//     CryptoJS.enc.Utf8.parse("2HOwmMKZS1wWvq6qxdeA5moUCubLJiXV"),
//     {
//       mode: CryptoJS.mode.ECB,
//       padding: CryptoJS.pad.Pkcs7,
//     }
//   ).toString();
//   let encryptedData = { data: encrypted };
//   return function(dispatch) {
//     return loginApi.validate2Fa(encryptedData);
//   };
// }

// export function postIssue(issueDetail) {
//   let encrypted = CryptoJS.AES.encrypt(
//     JSON.stringify(issueDetail),
//     CryptoJS.enc.Utf8.parse("2HOwmMKZS1wWvq6qxdeA5moUCubLJiXV"),
//     {
//       mode: CryptoJS.mode.ECB,
//       padding: CryptoJS.pad.Pkcs7,
//     }
//   ).toString();
//   let encryptedData = { data: encrypted };
//   return function(dispatch) {
//     return loginApi.postIssue(encryptedData);
//   };
// }

// // export function getUserMetaData(userId, dispatchToStore = true) {
// //   return function(dispatch) {
// //     return loginApi.getUserMetaData(userId).then((response) => {
// //       var decryptData = Utility.decrypt(response.data);
// //       Utility.log(decryptData, "userMetadata");
// //       if (dispatchToStore) {
// //         if (Object.keys(decryptData).length > 0) {
// //           dispatch({
// //             type: loginActionTypes.SET_USER_METADATA,
// //             payload: decryptData.result,
// //           });
// //           return decryptData;
// //         }
// //       } else {
// //         return decryptData;
// //       }
// //     });
// //   };
// // }

// export function setAccessTokenForUser(sessionDetails) {
//   Utility.log(sessionDetails, "session details");
//   window.sessionStorage.removeItem("userToken");
//   return function(dispatch, getState) {
//     let isUpgradeRequested = getState().umsReducer.levelUpgradeRequestStatus
//       .is_upgrade_requested;
//     let upgradeStatus = getState().umsReducer.levelUpgradeRequestStatus
//       .upgrade_status;
//     Utility.log(isUpgradeRequested, "set access token for user");
//     Utility.log(upgradeStatus, "upgrade status");
//     if (
//       sessionDetails?.current_stage?.status === User_Profile_Status.APPROVED ||
//       sessionDetails?.user_type === Admin_Role_Types.ADMIN ||
//       sessionDetails?.user_type === Admin_Role_Types.SUB_ADMIN ||
//       sessionDetails?.user_type === Admin_Role_Types.PROCESSOR ||
//       sessionDetails?.user_type === Admin_Role_Types.KYC_MANAGER ||
//       isUpgradeRequested ||
//       upgradeStatus === User_Profile_Status.REJECTED
//     ) {
//       dispatch({
//         type: loginActionTypes.SET_SESSION_DETAILS_FOR_USER,
//         payload: sessionDetails,
//       });
//     } else {
//       dispatch(assignAccessTokenToUser(sessionDetails));
//     }
//   };
// }

// export function clearSessionDetails() {
//   return function(dispatch) {
//     dispatch({
//       type: loginActionTypes.SET_SESSION_DETAILS_FOR_USER,
//       payload: {},
//     });
//   };
// }

// export function assignAccessTokenToUser(sessionDetails) {
//   return function(dispatch) {
//     if (sessionDetails) {
//       window.sessionStorage.setItem(
//         "userToken",
//         JSON.stringify(sessionDetails.token)
//       );
//     }
//   };
// }

// export function getMyLoginDetails(updateSession = true) {
//   return async function(dispatch) {
//     try {
//       const response = await loginApi.getMyDetails();
//       const decryptedResponse = Utility.decrypt(response.data);
//       if (updateSession) setSessionStorage(decryptedResponse.result);
//       return decryptedResponse;
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }

// function setSessionStorage(result) {
//   if (result) {
//     let userDetails = {};
//     Object.keys(result).forEach((key) => {
//       if (key !== "token" && key !== "role" && key !== "user_type") {
//         userDetails[key] = result[key];
//       }
//     });
//     window.sessionStorage.setItem("USER_DETAILS", JSON.stringify(userDetails));
//     window.sessionStorage.setItem("userRole", JSON.stringify(result.role));
//     window.sessionStorage.setItem(
//       "user_type",
//       JSON.stringify(result.user_type)
//     );
//     window.sessionStorage.setItem(
//       "user_profile",
//       JSON.stringify(result.profile)
//     );
//     result["application_id"] &&
//       window.sessionStorage.setItem(
//         "applicationId",
//         JSON.stringify(result["application_id"])
//       );
//     typeof result["two_factor"] === "boolean"
//       ? window.sessionStorage.setItem(
//           "twoFactor",
//           JSON.stringify(result["two_factor"])
//         )
//       : null;
//     result["current_stage"] && result["current_stage"]["fields"]
//       ? window.sessionStorage.setItem(
//           "fields",
//           JSON.stringify(result["current_stage"]["fields"])
//         )
//       : null;
//     result["id"]
//       ? window.sessionStorage.setItem("userId", JSON.stringify(result["id"]))
//       : null;
//     result["company_website"]
//       ? window.sessionStorage.setItem(
//           "companyWebsite",
//           JSON.stringify(result["company_website"])
//         )
//       : sessionStorage.setItem("companyWebsite", JSON.stringify(""));
//   }
// }
