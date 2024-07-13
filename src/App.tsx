import { useEffect, useReducer } from "react";
import { reducer } from "./reducer/reducer";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Colors from "./components/Colors/Colors";
import Rows from "./components/Rows/Rows";
import Secret from "./components/Secret/Secret";
import AppContext from "./contexts/Context";
import { checkGameState, initGameState } from "./helper/helper";
import { setGameState } from "./reducer/actions";
import GameEnds from "./components/GameEnds/GameEnds";

function App() {
  const [appState, dispatch] = useReducer(reducer, initGameState());

  useEffect(() => {
    const currentState = checkGameState(
      appState.hints,
      appState.currentRow - 1
    );
    if (currentState !== appState.gameState) {
      dispatch(setGameState(currentState));
    }
  }, [appState.currentRow]);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <div className="App">
        <div className="board">
          <Secret />
          <Rows />
          <Colors />
          <Buttons />
          <GameEnds />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
