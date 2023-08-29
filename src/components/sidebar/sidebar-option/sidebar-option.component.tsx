import { useState } from "react";
import "./sidebar-option.scss";

type SidebarOptionProps = {
  Icon: React.ElementType;
  title: string;
  number: number;
};

export function SidebarOption({ Icon, title, number }: SidebarOptionProps) {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div
      className={`sidebarOption ${selected && "sidebarOption--active"}`}
      onClick={() => setSelected(!selected)}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}
