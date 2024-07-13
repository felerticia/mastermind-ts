import { Action, ActionType, State } from "./types";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_COLOR: {
      return {
        ...state,
        currentColor: action.payload,
      };
    }

    case ActionType.SET_SLOT: {
      const currentRow = [...state.rows[state.currentRow]];
      currentRow[action.payload] = state.currentColor;
      state.rows[state.currentRow] = [...currentRow];
      return {
        ...state,
      };
    }

    case ActionType.CHECK_ROW: {
      let { currentRow, hints } = state;
      hints[currentRow] = [...action.payload];
      return {
        ...state,
        currentRow: state.currentRow + 1,
        hints,
      };
    }

    default:
      return state;
  }
};
