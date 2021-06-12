import Utility from "./utility";

export default class Validator {
  static checkEmail(email) {
    return /[a-zA-Z\d-_.]+[@]{1}[a-zA-Z\d-_.]+\.\S+/.test(email);
    // return /^(([a-zA-Z\d-_.+]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    //   email
    // );
  }
  static checkPassword(password) {
    return /^(?=.*?[0-9])(?=.*?[a-z])(?=.*[A-Z]).{7,}/.test(password);
  }

  static toBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (err) => {
        reject(err);
      };
    });
  }

  static capitaliseText(str) {
    if (typeof str === "string") {
      str = str.toLowerCase();
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    }
    return str;
  }

  static isValidUrl(url) {
    // let regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    return regex.test(url);
  }

  static isValidCurrency(currency, precision = "", digitLimit = "") {
    // let regex = /^[0-9]+\.?[0-9]{0,}$/;
    let regex = new RegExp(
      `(^\\d{0,${digitLimit}}?\\.\\d{0,${precision}}$)|(^\\d{1,${digitLimit}}$)`
    );
    Utility.log(regex);
    return regex.test(currency);
  }

  static upperPassword(password) {
    return /^(?=.*[A-Z])/.test(password);
  }
  static lowerPassword(password) {
    return /^(?=.*?[a-z])/.test(password);
  }
  static numPassword(password) {
    return /^(?=.*?[0-9])/.test(password);
  }
  static sevenPassword(password) {
    return /^.{7,}/.test(password);
  }
}
