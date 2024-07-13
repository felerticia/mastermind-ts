import { useReducer } from "react";
import { reducer } from "./reducer/reducer";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Colors from "./components/Colors/Colors";
import Rows from "./components/Rows/Rows";
import Secret from "./components/Secret/Secret";
import AppContext from "./contexts/Context";
import { initGameState } from "./helper/helper";

function App() {
  const [appState, dispatch] = useReducer(reducer, initGameState());
  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <div className="App">
        <div className="board">
          <Secret />
          <Rows />
          <Colors />
          <Buttons />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
