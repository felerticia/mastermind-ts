import { useAppContext } from "../../contexts/Context";
import { setSlot } from "../../reducer/actions";
import Circle from "../Circle/Circle";
import "./Rows.css";

const Rows = () => {
  const {
    appState: { currentRow, rows, hints },
    dispatch,
  } = useAppContext();

  const onClick = (columnNumber: number) => {
    dispatch(setSlot(columnNumber));
  };

  return (
    <div className="Rows">
      {new Array(10).fill(0).map((x, i) => (
        <div className={`Row ${i === currentRow ? "active" : ""}`} key={i}>
          <div>{i + 1}</div>
          <div className="circles">
            <Circle
              color={rows[i][0]}
              onClick={() => i === currentRow && onClick(0)}
            />
            <Circle
              color={rows[i][1]}
              onClick={() => i === currentRow && onClick(1)}
            />
            <Circle
              color={rows[i][2]}
              onClick={() => i === currentRow && onClick(2)}
            />
            <Circle
              color={rows[i][3]}
              onClick={() => i === currentRow && onClick(3)}
            />
          </div>
          <div className="hints">
            <Circle color={hints[i][0]} />
            <Circle color={hints[i][1]} />
            <Circle color={hints[i][2]} />
            <Circle color={hints[i][3]} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rows;
