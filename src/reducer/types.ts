export type Action = { type: string };

export type State = {};

export type AppContextType = {
  appState: State;
  dispatch: React.Dispatch<Action>;
};
