// import {
//   BASE_URL,
//   LOGIN_API,
//   BASE_TRADING_URL,
//   LANDING_API,
// } from "../utilities/apiRoutes";
// import NetworkManager from "../utilities/networkManager";

// export default class LoginApi {
//   static login(encryptData) {
//     return NetworkManager.post(BASE_URL + LOGIN_API.LOGIN, encryptData, false);
//   }

//   static forgetPassword(email) {
//     return NetworkManager.post(
//       BASE_URL + LOGIN_API.FORGET_PASSWORD,
//       email,
//       false
//     );
//   }

//   static logout(logoutDetails) {
//     return NetworkManager.post(
//       BASE_URL + LOGIN_API.LOGOUT,
//       logoutDetails,
//       false
//     );
//   }

//   static generateQr() {
//     return NetworkManager.post(BASE_URL + LOGIN_API.GENERATE_QR, {}, true);
//   }

//   static validate2Fa(otpValue) {
//     return NetworkManager.put(BASE_URL + LOGIN_API.GENERATE_QR, otpValue, true);
//   }

//   static postIssue(issueDetails) {
//     return NetworkManager.post(
//       BASE_URL + LOGIN_API.ISSUE_SUPPORT,
//       issueDetails,
//       true
//     );
//   }

//   /**Moved to umsApi */
//   // static getUserMetaData(userId) {
//   //   return NetworkManager.get(
//   //     BASE_TRADING_URL +
//   //       LANDING_API.NOTIFY_USER_STATUS +
//   //       // `?user_id=${userId}`,
//   //       `${userId}/`,
//   //     false
//   //   );
//   // }

//   static getMyDetails() {
//     return NetworkManager.get(BASE_URL + LOGIN_API.MY_DETAILS, true);
//   }
// }
