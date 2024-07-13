import "./Colors.css";
import { color_options } from "../../constants";
import Circle from "../Circle/Circle";
import { useAppContext } from "../../contexts/Context";
import { setColor } from "../../reducer/actions";

const Colors = () => {
  const { appState, dispatch } = useAppContext();

  return (
    <div className="Colors">
      {color_options.map((color) => (
        <div className="item" key={color}>
          <Circle
            color={color}
            className={appState.currentColor === color ? "active" : ""}
            onClick={() => dispatch(setColor(color))}
          />
        </div>
      ))}
    </div>
  );
};

export default Colors;
