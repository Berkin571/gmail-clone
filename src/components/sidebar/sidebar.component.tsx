import "./sidebar.scss";

import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
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
      <SidebarOption Icon={StarIcon} title="Favoriten" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Archiv" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="Wichtig" number={54} />
      <SidebarOption Icon={NearMeIcon} title="Gesendet" number={54} />
      <SidebarOption Icon={NoteIcon} title="Entwürfe" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
