import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import loginReducer from "../loginReducer";

import { store, persistor } from "../../store/configStore";

const storageKeys = {
  COMMON_REDUCER: "common_reducer",
  LOGIN_REDUCER: "login_reducer"
};

const commonReducerConfig = {
  key: storageKeys.COMMON_REDUCER,
  storage: storage,
  whitelist: [
    "isAuthentic",
    "userProfileDetails",
    "timeTicker",
    "timerStatus",
    "refreshSocketUrlTime"
  ]
};
// const landingReducerConfig = {
//   key: "landing_reducer",
//   storage: storage,
//   whitelist: ["userTransDetails"]
// };

const loginReducerConfig = {
  key: storageKeys.LOGIN_REDUCER,
  storage: storage,
  whitelist: ["sessionDetails"]
};

const appReducer = combineReducers({
  loginReducer: persistReducer(loginReducerConfig, loginReducer)
});

const rootReducer = (state, action) => {
  /** Called when user log's out */
  // if (action.type === types.RESET_STATE) {
  //   sessionStorage.clear();
  //   console.log("Called reset state");
  //   console.log(sessionStorage.length === 0);
  //   // persistor.purge();
  //   state = undefined;
  // }
  return appReducer(state, action);
};

export default rootReducer;
