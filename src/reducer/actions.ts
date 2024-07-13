import { ActionType } from "./types";

export const setColor = (color: string) => {
  return {
    type: ActionType.SET_COLOR,
    payload: color,
  };
};
