// import CryptoJS from "crypto-js";
// import { CRYPTO, ENABLE_LOGS, TRANSACTION_FLAG } from "./constants";
// import isEqual from "lodash/isEqual";
// import cloneDeep from "lodash/cloneDeep";
// import { REGEX } from "./constants";
// import moment from "moment";
// import numbro from "numbro";
// import Validator from "./validator";

// export class FormControl {
//   constructor(
//     label,
//     value,
//     validators = {
//       required: false,
//       minLength: 0,
//       maxLength: undefined,
//       onlyNumber: false,
//       onlyDecimal: false,
//       email: false,
//       password: false,
//       telephone: false,
//     },
//     error = null,
//     touched = false,
//     showPassword = false,
//     type = "",
//     id = ""
//   ) {
//     this.label = label;
//     this.value = value;
//     this.validators = validators;
//     this.error = error || Utility.getValidationError(this);
//     this.touched = touched;
//     this.showPassword = showPassword;
//     this.type = type;
//     this.name = name;
//     this.id = id;
//   }
// }

// export default class Utility {
//   /**
//    * generates the error message for a FormControl instance
//    *
//    * @param {FormControl} formControl
//    * @return {string} errorMessage
//    *
//    *
//    */
//   static getValidationError(formControl) {
//     if (formControl.validators.required && !formControl.value) {
//       return `${formControl.label} is required`;
//     }
//     if (
//       formControl.validators.minLength &&
//       formControl.value &&
//       formControl.value.length < formControl.validators.minLength
//     ) {
//       return `${formControl.label} requires minimum ${formControl.validators.minLength} characters`;
//     }
//     if (
//       formControl.validators.maxLength &&
//       formControl.value &&
//       formControl.value.length > formControl.validators.maxLength
//     ) {
//       return `${formControl.label} requires exceeds ${formControl.validators.maxLength} characters`;
//     }
//     if (
//       formControl.validators.email &&
//       formControl.value &&
//       !REGEX.email.test(formControl.value)
//     ) {
//       return `Invalid ${formControl.label}`;
//     }
//     if (
//       formControl.validators.password &&
//       formControl.value &&
//       !PASSWORD_REGEX.password.test(formControl.value)
//     ) {
//       return `Invalid ${formControl.label}`;
//     }

//     if (
//       formControl.validators.url &&
//       formControl.value &&
//       !Validator.isValidUrl(formControl.value)
//     ) {
//       return `Invalid ${formControl.label}`;
//     }

//     return null;
//   }

//   /**
//    *
//    * @param {string} cipherText
//    * @returns {object}
//    */
//   static decrypt(cipherText) {
//     if (cipherText) {
//       return JSON.parse(
//         CryptoJS.AES.decrypt(
//           cipherText,
//           CryptoJS.enc.Utf8.parse(CRYPTO.SECRET_KEY),
//           {
//             mode: CryptoJS.mode.ECB,
//             padding: CryptoJS.pad.Pkcs7,
//           }
//         ).toString(CryptoJS.enc.Utf8)
//       );
//     }
//   }

//   /**
//    *
//    * @param {*} data
//    * @returns {object} encrypted data
//    */

//   static encrypt(data, onlyString = false) {
//     if (data) {
//       let encrypted = CryptoJS.AES.encrypt(
//         JSON.stringify(data),
//         CryptoJS.enc.Utf8.parse(CRYPTO.SECRET_KEY),
//         {
//           mode: CryptoJS.mode.ECB,
//           padding: CryptoJS.pad.Pkcs7,
//         }
//       ).toString();

//       return onlyString ? JSON.stringify(encrypted) : { data: encrypted };
//     }
//   }

//   /**
//    *
//    * @param {*} value1
//    * @param {*} value2
//    *
//    * @returns {boolean}
//    *
//    * compares passed values and returns true or false
//    */
//   static equals(value1, value2) {
//     return isEqual(value1, value2);
//   }

//   /**
//    *
//    * @param {object} object
//    *
//    * @returns {object}
//    * deep clone of the passed value
//    */
//   static clone(value) {
//     return cloneDeep(value);
//   }

//   /**
//    *
//    * @param {string} qrCodeValue
//    * @return {string}
//    * splits the string in four parts and joins them back with "-"
//    */
//   static splitStringToFour(qrCodeValue) {
//     if (typeof qrCodeValue === "string") {
//       let str = "";
//       for (let i = 0; i < qrCodeValue.length; i += 4) {
//         if (i + 4 >= qrCodeValue.length) {
//           str = str + qrCodeValue.slice(i);
//         } else {
//           str = str + qrCodeValue.slice(i, i + 4) + "-";
//         }
//       }
//       return str;
//     }
//     return "";
//   }

//   static calculateAmountAfterFeeDeduction(amount, fee, precision) {
//     let finalAmount = (amount - fee).toFixed(precision);
//     return parseFloat(finalAmount);
//   }

//   static download(url, target = "") {
//     let a = document.createElement("a");
//     a.href = url;
//     a.setAttribute("download", "download");
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   }

//   static setTransactionFlag(value) {
//     window.sessionStorage.setItem(TRANSACTION_FLAG, JSON.stringify(value));
//   }

//   static getTransactionFlag() {
//     let flag = window.sessionStorage.getItem(TRANSACTION_FLAG);
//     flag = flag && JSON.parse(flag);
//     return flag;
//   }

//   static convertBaseToQuote(value, currentPrice, precision) {
//     return (value / currentPrice).toFixed(precision);
//   }

//   static convertQuoteToBase(value, currentPrice, precision) {
//     return (value * currentPrice).toFixed(precision);
//   }

//   static formatDate(date, format = "DD-MM-YYYY HH:mm A") {
//     return moment.utc(date).format(format);
//   }

//   static localeTime(date, DateFormat = "DD-MM-YYYY HH:mm A") {
//     if (date) {
//       return moment(date)
//         .local()
//         .format(DateFormat);
//     }
//   }

//   /**
//    * Converts the given date to utc
//    * @param {Date} date
//    * @param {String} format
//    *
//    * @returns {Date}
//    */
//   static convertToUtc(date, format = "YYYY-MM-DDTHH:mm:ss") {
//     return moment(date)
//       .hour(0)
//       .utc()
//       .format(format);
//   }
//   /**
//    *
//    * @param {String} message
//    * prints to browser console
//    *
//    */

//   static log(...messages) {
//     if (ENABLE_LOGS && messages.length) {
//       console.log(...messages);
//     }
//   }

//   /**
//    *
//    * @param {Number} number
//    *
//    * @returns {Number}
//    *
//    * counts the number of digits in a number
//    */

//   static countDigitsInNumber(number) {
//     if (number) {
//       let wholeNumber = parseFloat(number)
//         .toFixed(2)
//         .split(".")[0];
//       return wholeNumber.length;
//     }
//   }

//   static formatNumbers(
//     number,
//     commaSeprated = true,
//     forceSign = false,
//     precision = 2,
//     isCurrency = false
//   ) {
//     if (number && !isNaN(number)) {
//       number = parseFloat(number);
//       if (typeof number === "number") {
//         number = precision ? number.toFixed(precision) : number;
//         if (isCurrency) {
//           let format = {
//             thousandSeparated: commaSeprated,
//             forceSign: forceSign,
//           };
//           precision ? (format["mantissa"] = precision) : "";
//           return numbro(number).formatCurrency(format);
//         } else {
//           let format = {
//             thousandSeparated: commaSeprated,
//             forceSign: forceSign,
//           };
//           precision ? (format["mantissa"] = precision) : "";
//           return numbro(number).format(format);
//         }
//       }
//     }
//     return "0.00";
//   }

//   static formatStrings(value, block = [], delimiter = "-") {
//     if (value) {
//       let str = value.toString();
//       let result = "";
//       let prevIndex = 0;
//       let totalLength = 0;
//       block.forEach((b) => {
//         totalLength += b;
//       });
//       if (str.length <= totalLength) {
//         block.forEach((b, index) => {
//           if (block.length === index + 1)
//             result = result + str.substring(prevIndex);
//           else {
//             result =
//               result + str.substring(prevIndex, prevIndex + b) + delimiter;
//           }
//           prevIndex = prevIndex + b;
//         });
//         return result;
//       } else {
//         return value;
//       }
//     }
//   }

//   static isEmpty(value) {
//     if (typeof value === "undefined") {
//       return true;
//     } else if (value === null) {
//       return true;
//     } else if (Array.isArray(value)) {
//       return value.length === 0 ? true : false;
//     } else if (typeof value === "object") {
//       return Object.keys(value).length === 0 && value.constructor === Object
//         ? true
//         : false;
//     } else if (typeof value === "string") {
//       return value.length === 0 ? true : false;
//     }
//     return false;
//   }

//   /**
//    * Truncates the string from middle
//    * @param {String} str
//    * @returns {String}
//    */
//   static truncateMiddle(str) {
//     if (typeof str === "string") {
//       let truncatedStr =
//         str.substring(0, 4) +
//         "&hellip;" +
//         str.substring(str.length - 4, str.length);
//       const textarea = document.createElement("textarea");
//       textarea.innerHTML = truncatedStr;
//       return textarea.value;
//       // return truncatedStr;
//     }
//     return str;
//   }

//   static formatCryptoNameText(currenyName) {
//     if (currenyName) {
//       let currencyToken = currenyName.split(" ");
//       return currencyToken[0] === "USD"
//         ? currencyToken[0] + " " + Validator.capitaliseText(currencyToken[1])
//         : currencyToken
//             .map((token) => Validator.capitaliseText(token))
//             .join(" ");
//     }
//   }

//   /**
//    *
//    * @param {Date} date
//    * @param {Number} value
//    * @param {string} shorthand - Moment shorthand ['y', 'Q', 'M', 'w', 'd', 'h', 'm', 's', 'ms']
//    *
//    * @returns new Date obj with added value absed on shorthand
//    */
//   static addTimeToDate(date = new Date(), value, shorthand) {
//     return moment(date).add(value, shorthand);
//   }
// }

// export class FilterControl {
//   constructor(
//     label = "",
//     onChange,
//     value = "",
//     parent = "",
//     type = "",
//     checked = false
//   ) {
//     this.type = type;
//     this.onChange = onChange;
//     this.checked = checked;
//     this.label = label;
//     this.parent = parent;
//     this.value = value;
//   }
// }

// export class SwitchControl {
//   constructor(label = "", value = "", type = "", id = "", name = "") {
//     this.label = label;
//     this.value = value;
//     this.type = type;
//     this.id = id;
//     this.name = name;
//   }
// }

// export class DocumentEntity {
//   constructor(
//     type,
//     fileType,
//     label,
//     name,
//     value,
//     error,
//     validators = {},
//     keyRef,
//     inputType,
//     uploadId,
//     disabled = false,
//     isMulti = false
//   ) {
//     this.type = type;
//     this.fileType = fileType;
//     this.label = label;
//     this.name = name;
//     this.value = value;
//     this.error = error;
//     this.validators = validators;
//     this.keyRef = keyRef;
//     this.inputType = inputType;
//     this.uploadId = uploadId;
//     this.disabled = disabled;
//     this.isMulti = isMulti;
//   }

//   getValidationError() {
//     // console.log(
//     //   this.validators?.maxFileCapacity,
//     //   this.value,
//     //   "maxfilecapacity"
//     // );
//     let error = "";
//     if (this.value && !Utility.isEmpty(this.validators.supportedFormats)) {
//       error = this.isFileFormatSupported(this.value);
//       console.log(error);
//       if (error) return error;
//     }
//     if (this.value && this.validators?.maxFileSize) {
//       error = this.isFileSizeExceeded(this.value);
//       console.log(error);
//       if (error) return error;
//     }
//     if (this.value && this.validators?.maxFileCapacity) {
//       // console.log("Called file capacity");
//       error = this.isFileCapacityExceeded(this.value);
//       if (error) return error;
//     } else {
//       return "";
//     }
//   }

//   isFileSizeExceeded(value) {
//     if (this.isMulti) {
//       let error = "";
//       // let keys = Object.keys(value);
//       for (let i = 0; i < value.length; i++) {
//         error =
//           value[i].size / 1048576 > this.validators.maxFileSize
//             ? `File size should be less than ${this.validators.maxFileSize}mb-${value[i].name}`
//             : false;
//         if (error) {
//           return error;
//         }
//       }
//       return error;
//     } else {
//       let error =
//         value.size / 1048576 > this.validators.maxFileSize
//           ? `File size should be less than ${this.validators.maxFileSize}mb`
//           : false;
//       return error;
//     }
//   }

//   isFileFormatSupported(value) {
//     if (this.isMulti) {
//       let error = "";
//       // let keys = Object.keys(value);
//       for (let i = 0; i < value.length; i++) {
//         let ext = value[i].name.split(".").pop();
//         error = !this.validators.supportedFormats[ext]
//           ? `File format not supported-${value[i].name}`
//           : false;
//         if (error) {
//           return error;
//         }
//       }
//       return error;
//     } else {
//       // console.log(value);
//       let ext = value.name.split(".").pop();
//       // console.log(ext);
//       let error = !this.validators.supportedFormats[ext]
//         ? "File format not supported"
//         : false;
//       // console.log(error);
//       return error;
//     }
//   }

//   isFileCapacityExceeded(value) {
//     // console.log("Called", value);
//     if (this.isMulti) {
//       let error = "";
//       // let keys = Object.keys(value);
//       // console.log(
//       //   keys,
//       //   keys.length,
//       //   this.validators.maxFileCapacity,
//       //   "capacity"
//       // );
//       error =
//         value.length > this.validators.maxFileCapacity
//           ? `Maximum of only ${this.validators.maxFileCapacity} files are allowed`
//           : false;
//       return error;
//     }
//   }
// }
