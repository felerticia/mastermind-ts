import { useAppContext } from "../../contexts/Context";
import { newGame } from "../../reducer/actions";

const NewGame = () => {
  const { dispatch } = useAppContext();

  return (
    <button className="Button" onClick={() => dispatch(newGame())}>
      New Game
    </button>
  );
};

export default NewGame;
