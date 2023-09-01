import { CheckBox } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutinedIcon from "@mui/icons-material/LabelImportantOutlined";

import { useNavigate } from "react-router-dom";

import "./email-row.scss";

type EmailRowProps = {
  id?: string;
  title: string;
  subject: string;
  description: string;
  time: string;
};

export function EmailRow({ title, subject, description, time }: EmailRowProps) {
  const navigate = useNavigate();

  return (
    <div className="emailRow" onClick={() => navigate("/mail")}>
      <div className="emailRow__options">
        <CheckBox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutinedIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">- {description}</span>
        </h4>
      </div>

      <div className="emailRow__time">{time}</div>
    </div>
  );
}
