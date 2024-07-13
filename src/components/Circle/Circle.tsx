import "./Circle.css";

type CircleProps = {
  color?: string;
  className?: string;
};

const Circle = ({ color, className }: CircleProps) => {
  return (
    <div className={`Circle  ${color || "transparent"} ${className || ""}`} />
  );
};

export default Circle;
