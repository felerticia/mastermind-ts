import "./GameEnds.css";
import { useAppContext } from "../../contexts/Context";
import Circle from "../Circle/Circle";
import NewGame from "../Buttons/NewGame";
import { GameState } from "../../reducer/types";

const GameEnds = () => {
  const { appState } = useAppContext();

  if (appState.gameState === GameState.Ongoing) return;

  return (
    <div className="GameEnds">
      <p>You {appState.gameState}!</p>
      <p>The secret was:</p>
      <div className="secret">
        {appState.secret.map((x) => (
          <Circle color={x} />
        ))}
      </div>
      <NewGame />
    </div>
  );
};

export default GameEnds;
