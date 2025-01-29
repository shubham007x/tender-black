import { ACTIONS } from "../constants/actionTypes";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: Math.min(state.count + 1, 98) };
    case ACTIONS.DECREMENT:
      return { ...state, count: Math.max(state.count - 1, 0) };
    case ACTIONS.RESET:
      return { ...state, count: 0 };
    case ACTIONS.TOGGLE_AUTO:
      return { ...state, isActive: !state.isActive };
    default:
      return state;
  }
};
