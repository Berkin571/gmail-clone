import "./sidebar.scss";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Schreiben
      </Button>
    </div>
  );
}
