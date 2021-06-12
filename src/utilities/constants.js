// export const CLIENT =
//   process.env.REACT_APP_BUILD_TYPE === "dev"
//     ? {
//         SECRET:
//           "g6Zx89fiaupTIDy527QPRXJ9bazVziCHxkyT8dXX4wafSiyk06a6UQl52iVp9tV4Juw26s6Zn8y4hm0uBHyVn5BMMSZanGeLVhj6fQV55xfjCOiL5tWiAHii52mxzzlt",
//         ID: "PWoHrK74L770CZYR9zc3NBEPS9h75lIXQdN0zcDj",
//       }
//     : {
//         SECRET:
//           "6dYGYg9a0SpdVU5rlGqHGMfk9WN6sw1bJPTuKs5nkxpVETaT6YC1JVDHgBN32rgPvSgB3zR63L3Add0LE0OLuX4X5oNKIzusLDomUKamkhOwI40cSwWtg5WgqUHD3WsS",
//         ID: "7gq6trDEMW7ofOGeiWryoE4ZRU3AtzSbRKgAbfOc",
//       };
// export const CRYPTO = {
//   SECRET_KEY: "2HOwmMKZS1wWvq6qxdeA5moUCubLJiXV",
// };

// export const HOME_PAGE = "http://www.cryptospaceus.com";

// export const REGEX = {
//   EMAIL: /^(([a-zA-Z\d-_.]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//   PASSWORD: /^(?=.*?[0-9])(?=.*?[a-z])(?=.*[A-Z]).{7,}/,
//   ONLY_NUMERALS: /^\d+$/,
//   ATLEAST_ONE_ALPHABET: /[a-zA-Z]+/,
//   ALPHA_NUMBERIC: /^[a-zA-Z0-9]+$/,
// };

// export const RESPONSE_STATUS = {
//   SUCCESS: "success",
//   ERROR: "failed",
//   SUCCESS_CODE: 200,
// };

// export const SCANNER_STATUS = {
//   ALLOWED: 1,
//   DENIED: 0,
//   AWAITING: -1,
//   COMPLETED: 2,
// };

// export const PAYMENT_TYPES = {
//   DEPOSIT: "DEPOSIT",
//   PURCHASE: "PURCHASE",
//   TRANSFER: "TRANSFER",
// };

// export const STATUS = {
//   COMPLETED: "COMPLETED",
//   APPROVED: "APPROVED",
//   IN_PROGRESS: "IN_PROGRESS",
//   CANCELLED: "CANCELLED",
//   REJECTED: "REJECTED",
//   ALL: "ALL",
//   PENDING: "PENDING",
// };

// export const PAYMENT_METHODS = {
//   ACH: "ACH",
//   WIRE: "WIRE",
//   CREDIT_CARD: "credit_card",
//   ach: "ach",
//   wire: "wire",
//   ALL: "ALL",
//   WALLET: "wallet",
//   OTC: "otc",
// };

// export const TRADE_SIDE = {
//   ALL: "ALL",
//   BUY: "BUY",
//   SELL: "SELL",
// };

// export const CRYPTO_CURRENCY_TYPE = {
//   ALL: "ALL",
//   USD: "USD",
//   ETHEREUM: "ETH",
//   BITCOIN: "BTC",
//   LITECOIN: "LTC",
//   BITCOINCASH: "BCH",
//   TETHER: "USDT",
//   USDCOIN: "USDC",
// };

// export const PAYMENT_HISTORY_STATUS = {
//   IN_PROGRESS: "PENDING",
//   APPROVE: "APPROVED",
//   CANCEL: "REJECTED",
//   PENDING: "IN_PROGRESS",
//   APPROVED: "APPROVED",
//   CANCELLED: "CANCELLED",
//   COMPLETED: "APPROVED",
//   REJECTED: "REJECTED",
//   SENT: "APPROVED",
//   ALL_HISTORY: "",
// };

// export const DateFormat = "YYYY-MM-DD";
// export const DepositDateFormat = "YYYY-MM-DDTHH:mm:ssZ";
// export const DEPOSIT_WITHDRAW_DATE_FORMAT = "DD MMM, YYYY hh:mm A";
// export const TRADE_DATE_FORMAT = "MM/DD/YYYY";

// export const TRANSACTION_FLAG = "transaction_flag";

// export const Trade_Type = {
//   CRYPTO_TO_CRYPTO: "CRYPTO_TO_CRYPTO",
//   FIAT_TO_CRYPTO: "FIAT_TO_CRYPTO",
//   CRYPTO_TO_FIAT: "CRYPTO_TO_FIAT",
// };

// export const OTC_CONFIGURATION = {
//   OTC_ORDER_TIMEOUT: "OTC_ORDER_TIMEOUT",
//   ACH_PROCESSING_TIME: "ach_processing_time",
//   WIRE_PROCESSING_TIME: "wire_processing_time",
//   DEPOSIT_WIRE_FEE: "deposit_wire_fee",
//   DEPOSIT_ACH_FEE: "deposit_ach_fee",
//   WITHDRAWAL_FEE: "withdrawal_fee",
//   WITHDRAWAL_PROCESSING_TIME: "withdrawal_processing_time",
//   MINIMUM_AMOUNT: "deposit_min_limit",
//   DEPOSIT_MIN_LIMIT: "deposit_min_limit",
//   WITHDRAWAL_MIN_LIMIT: "withdrawal_min_limit",
//   DEPOSIT_MAX_LIMIT: "deposit_max_limit",
//   SUB_ADMIN_APPROVAL_LIMIT: "sub_admin_approval_limit",
//   MAX_BUY_LIMIT: "MAX_BUY_LIMIT",
//   MIN_BUY_LIMIT: "MIN_BUY_LIMIT",
// };

// export const Currency_Types = {
//   Crypto: "CRYPTO",
//   Fiat: "FIAT",
// };

// export const Annual_Income_Obj = {
//   BELOW_50K: "Under 50k",
//   BETWEEN_50K_AND_99K: "50,000-99,000",
//   BETWEEN_100K_AND_249K: "100,000-249,999",
//   BETWEEN_250K_AND_999K: "250,000-999,999",
//   ABOVE_1M: "1M+",
//   ABOVE_10M: "10M+",
//   ABOVE_100M: "100M+",
//   ABOVE_1B: "1B+",
// };

// export const Annual_Income_Map = new Map([
//   ["Under 50k", "BELOW_50K"],
//   ["50,000-99,000", "BETWEEN_50K_AND_99K"],
//   ["100,000-249,000", "BETWEEN_100K_AND_249K"],
//   ["250,000-999,999", "BETWEEN_250K_AND_999K"],
//   ["1M+", "ABOVE_1M"],
//   ["10M+", "ABOVE_10M"],
//   ["100M+", "ABOVE_100M"],
//   ["1B+", "ABOVE_1B"],
// ]);

// export const Industry_Options = [
//   "Accounting",
//   "Business Services",
//   "Construction",
//   "Consulting",
//   "Contract Wholesaler",
//   "Education",
//   "Entertainment",
//   "Financial Services",
//   "Government",
//   "Insurance Health",
//   "Healthcare Providers",
//   "Insurance",
//   "legal",
//   "Healthcare Life Sciences",
//   "Manufacturing",
//   "Real Estate Mortgage",
//   "Not For Profit",
//   "Real Estate Commercial",
//   "Real Estate Agent",
//   "Retail",
//   "Sales",
//   "Individual",
//   "Technology",
//   "Other",
// ];
// export const Nature_Of_Business_Options = [
//   "Sole Proprietor",
//   "Corporation",
//   "Partnership",
//   "LLC",
//   "Other",
// ];

// export const ENABLE_LOGS = process.env.REACT_APP_BUILD_TYPE === "dev";

// export const User_Types = {
//   INDIVIDUAL: "INDIVIDUAL",
//   INSTITUTION: "INSTITUTION",
// };

// export const Admin_Role_Types = {
//   ADMIN: "ADMIN",
//   SUB_ADMIN: "SUB_ADMIN",
//   PROCESSOR: "PROCESSOR",
//   KYC_MANAGER: "KYC_MANAGER",
// };

// export const Level_Types = {
//   LEVEL_1: "LEVEL_1",
//   LEVEL_2: "LEVEL_2",
// };

// export const User_Profile_Status = {
//   PROFILE_SETUP: "PROFILE_SETUP",
//   UPLOAD_ID_PROOF: "UPLOAD_ID_PROOF",
//   MOBILE_VERIFICATION: "MOBILE_VERIFICATION",
//   INPROGRESS: "INPROGRESS",
//   APPROVED: "APPROVED",
//   REJECTED: "REJECTED",
//   RESUBMISSION: "RESUBMISSION",
// };

// export const USER_UPGRADED_ALREADY = 1053;

// //In milliseconds
// export const SOCKET_URL_EXPIRE_TIME = 1800000 - 20000;

// export const REPORT_TYPES = {
//   SAR: "SAR",
//   CTR: "CTR",
// };

// export const MINING_FEE_OPERATIONS = {
//   ADD: "ADD",
//   SUB: "SUB",
// };

// export const Upload_File_Types = {
//   DOC: "DOCUMENT",
//   IMG: "IMAGE",
// };

// export const USER_ACCOUNT_STATUS = {
//   SUSPENDED: "SUSPENDED",
//   CLOSED: "CLOSED",
//   ENABLED: "ENABLED",
//   DEACTIVATE_PERMANENT: "DEACTIVATE_PERMANENT",
//   DISABLE_TEMPORARY: "DISABLE_TEMPORARY",
//   DISABLE_TRADE_AND_DEPOSIT: "DISABLE_TRADE_AND_DEPOSIT",
// };

// export const TWO_FACTOR_AUTH_STATUS = {
//   TWO_FACTOR_ENABLED: "TWO_FACTOR_ENABLED",
//   TWO_FACTOR_DISABLED: "TWO_FACTOR_DISABLED",
// };

// export const Perspective = {
//   BASE_PERSPECTIVE: "BASE_PERSPECTIVE",
//   QUOTE_PERSPECTIVE: "QUOTE_PERSPECTIVE",
// };

// //In ms for deposit, withdraw & trade
// export const REFRESH_TIMER_FOR_ADMIN = 60000;

// export const RISK_TYPES = {
//   LOW: "LOW",
//   MEDIUM: "MEDIUM",
//   HIGH: "HIGH",
//   RISK: "Risk",
//   SEVERE: "SEVERE",
// };

// export const Worker_Activity_Messages = {
//   TIMER_COMPLETED: "TIMER_COMPLETED",
//   INIT_TIMER: "INIT_TIMER",
//   TIMER_STARTED: "TIMER_STARTED",
// };

// export const List_Of_Id = [
//   { value: "DRIVERS_LICENSE", label: "Drivers license" },
//   { value: "ID_CARD", label: "ID card" },
//   { value: "PASSPORT", label: "Passport" },
// ];

// export const Selfie_Instructions = {
//   DO_LIST: [
//     "Upload a clear font-facing photo of yourself looking directly into the camera from shoulders up",
//     "You include your ID",
//     "Your face is showing (smile!)",
//     "Your ID is legible",
//   ],
//   DONT_LIST: [
//     "Cover your face on your ID",
//     "Cover your personal information on your ID",
//     "Send a blurry or out of focus photo",
//   ],
// };

// export const Generic_Instructions = {
//   DO_LIST: [
//     "Upload a photo in jpeg / png format",
//     "Photo size should not exceed more than 5mb",
//     "Upload a document in pdf/doc/docx format",
//     "Document size should not exceed more than 25mb",
//     "Your document is legible",
//   ],
//   DONT_LIST: ["Send a blurry or out of focus photo"],
// };

// export const Timer_Status = {
//   STAND_BY: "STAND_BY",
//   RUNNING: "RUNNING",
//   COMPLETED: "COMPLETED",
// };

// export const Domain_Url =
//   process.env.REACT_APP_BUILD_TYPE === "dev"
//     ? "https://cryptospace-dev.web.app"
//     : process.env.REACT_APP_BUILD_TYPE === "staging"
//     ? "https://staging.cryptospace.com"
//     : "";
