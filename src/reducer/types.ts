export enum ActionType {
  SET_COLOR = "SET_COLOR",
  SET_SLOT = "SET_SLOT",
}
export type Action =
  | { type: ActionType.SET_COLOR; payload: string }
  | { type: ActionType.SET_SLOT; payload: number };

export enum GameState {
  Ongoing = "Ongoing",
  Won = "Won",
  Lost = "Lost",
}

export type State = {
  currentRow: number;
  currentColor: string;
  rows: string[][];
  hints: string[][];
  secret: string[];
  gameState: GameState;
};

export type AppContextType = {
  appState: State;
  dispatch: React.Dispatch<Action>;
};
