import { Action, ActionType } from "./types";

export const setColor = (color: string): Action => {
  return {
    type: ActionType.SET_COLOR,
    payload: color,
  };
};

export const setSlot = (columnNumber: number): Action => {
  return {
    type: ActionType.SET_SLOT,
    payload: columnNumber,
  };
};
