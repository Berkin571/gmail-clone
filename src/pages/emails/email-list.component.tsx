import "./email-list.scss";

import { Checkbox, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { EmailRow, Section } from "../../components";
import { useState } from "react";

export function EmailList() {
  const [selectedSection, setSelectedSection] = useState("");

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section
          Icon={InboxIcon}
          title={"Posteingang"}
          color={"red"}
          selected={selectedSection === "Posteingang"}
          setSelected={setSelectedSection}
        />
        <Section
          Icon={PeopleIcon}
          title={"Freunde & Familie"}
          color={"green"}
          selected={selectedSection === "Freunde & Familie"}
          setSelected={setSelectedSection}
        />
        <Section
          Icon={LocalOfferIcon}
          title={"Werbung & Angebote"}
          color={"black"}
          selected={selectedSection === "Werbung & Angebote"}
          setSelected={setSelectedSection}
        />
      </div>

      <div className="emailList__list">
        <EmailRow
          id={"1"}
          title={"Twitch"}
          subject={"Hey fellow streamer!"}
          description={"This is blabla"}
          time={"14:34"}
        />
        <EmailRow
          id={"1"}
          title={"Twitch"}
          subject={"Hey fellow streamer!"}
          description={"This is blabla"}
          time={"14:34"}
        />
      </div>
    </div>
  );
}
