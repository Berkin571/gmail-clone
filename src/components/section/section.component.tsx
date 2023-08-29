import { useState } from "react";
import "./section.scss";

type SectionProps = {
  Icon: React.ElementType;
  title: string;
  color: string;
  selected?: boolean;
  setSelected?: (title: string) => void;
};

export function Section({
  Icon,
  title,
  color,
  selected,
  setSelected,
}: SectionProps) {
  const [hovered, setHovered] = useState(false);

  const handleStyle = hovered || selected;
  return (
    <div
      className={`section ${handleStyle && "section--selected"}`}
      style={{
        borderBottom: `${handleStyle ? `3px solid ${color}` : ""}`,
        color: `${handleStyle ? color : "grey"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setSelected(title)}
    >
      <Icon />
      <h4 style={{ marginLeft: "25px" }}>{title}</h4>
    </div>
  );
}
