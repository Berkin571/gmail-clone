import "./sidebar-option.scss";

type SidebarOptionProps = {
  Icon: any;
  title: string;
  number: number;
};

export function SidebarOption({ Icon, title, number }: SidebarOptionProps) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}
