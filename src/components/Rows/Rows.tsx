import "./Rows.css";

const Rows = () => {
  return (
    <div className="Rows">
      {new Array(10).fill(0).map((x, i) => (
        <div className="Row" key={i}>
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default Rows;
