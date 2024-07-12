import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import Colors from "./components/Colors/Colors";
import Rows from "./components/Rows/Rows";
import Secret from "./components/Secret/Secret";

function App() {
  return (
    <div className="App">
      <div className="board">
        <Secret />
        <Rows />
        <Colors />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
