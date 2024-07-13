import "./Circle.css";

type CircleProps = {
  color?: string;
  className?: string;
  onClick?: () => void;
};

const Circle = ({ color, className, onClick }: CircleProps) => {
  return (
    <div
      className={`Circle  ${color || "transparent"} ${className || ""}`}
      onClick={onClick}
    />
  );
};

export default Circle;
