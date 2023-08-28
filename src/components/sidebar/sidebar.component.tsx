import "./sidebar.scss";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import { SidebarOption } from "./sidebar-option/sidebar-option.component";

export function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Schreiben
      </Button>

      <SidebarOption Icon={InboxIcon} title="Eingang" number={54} />
    </div>
  );
}
