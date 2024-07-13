import "./Colors.css";
import { color_options } from "../../constants";
import Circle from "../Circle/Circle";
import { useAppContext } from "../../contexts/Context";

const Colors = () => {
  const { appState } = useAppContext();

  return (
    <div className="Colors">
      {color_options.map((color) => (
        <div className="item" key={color}>
          <Circle
            color={color}
            className={appState.currentColor === color ? "active" : ""}
          />
        </div>
      ))}
    </div>
  );
};

export default Colors;
