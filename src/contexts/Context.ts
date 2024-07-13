import { createContext, useContext } from "react";
import { AppContextType } from "../reducer/types";

const defaultContextValue: AppContextType = {
  appState: {},
  dispatch: () => {},
};

const AppContext = createContext<AppContextType>(defaultContextValue);

export function useAppContext() {
  return useContext(AppContext);
}

export default AppContext;
