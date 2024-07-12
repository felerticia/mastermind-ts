import Circle from "../Circle/Circle";
import "./Rows.css";

const Rows = () => {
  return (
    <div className="Rows">
      {new Array(10).fill(0).map((x, i) => (
        <div className="Row" key={i}>
          <div>{i + 1}</div>
          <div className="circles">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </div>
          <div className="hints">
            <Circle />
            <Circle />
            <Circle />
            <Circle />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rows;
