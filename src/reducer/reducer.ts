import { Action, ActionType, State } from "./types";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.SET_COLOR: {
      return {
        ...state,
        currentColor: action.payload,
      };
    }

    default:
      return state;
  }
};
