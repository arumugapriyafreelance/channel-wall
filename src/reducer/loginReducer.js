import * as loginActionTypes from "../action/actionTypes/loginActionType";
import initalState from "./common/initialState";

export default function loginReducer(state = initalState.loginReducer, action) {
  switch (action.type) {
    case loginActionTypes.SET_SESSION_DETAILS_FOR_USER:
      return {
        ...state,
        sessionDetails: action.payload
      };
    default:
      return { ...state };
  }
}
