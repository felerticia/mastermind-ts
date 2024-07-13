import { Action, ActionType, GameState } from "./types";

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

export const checkRow = (hints: string[]): Action => {
  return {
    type: ActionType.CHECK_ROW,
    payload: hints,
  };
};

export const setGameState = (gameState: GameState): Action => {
  return {
    type: ActionType.SET_GAME_STATE,
    payload: gameState,
  };
};

export const newGame = (): Action => {
  return {
    type: ActionType.NEW_GAME,
  };
};
