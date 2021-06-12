export const BASE_URL = process.env.REACT_APP_SERVER_URL;
export const BASE_URL_2 = process.env.REACT_APP_KYC_SERVER_URL;
export const BASE_TRADING_URL = process.env.REACT_APP_TRADING_SERVER_URL;
export const BASE_MARKET_DATA_URL =
  process.env.REACT_APP_MARKET_DATA_SERVER_URL;
export const BASE_WS_URL = process.env.REACT_APP_WS_URL;

export const VERIFICATION = {
  VERIFYEMAIL: "signup/",
  ISEMAILVERIFIED: "verify-email/",
  RESENDVERIFICATION: "resend-email/",
  CREATEACCOUNT: "set-password/",
  OTP: "otp/",
  RESENDOTP: "resend-otp/",
  EMAIL_STATUS: "email-status/",
  RESET_PASSWORD: "onboarding/reset-password/"
};
