import "./Circle.css";

type CircleProps = {
  color: string;
};

const Circle = ({ color }: CircleProps) => {
  return <div className={`Circle ${color}`} />;
};

export default Circle;
