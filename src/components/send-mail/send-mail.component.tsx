import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../service/mailSlice";

import "./send-mail.scss";

type formDataType = {
  to: string;
  subject: string;
  message: string;
};

export function SendMail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (formData: formDataType) => {
    console.log(formData);
  };

  // 5:19

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>Neue Nachricht</h3>
        <Close
          className="sendMail__header__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Empfänger"
          name="to"
          {...register("to", { required: true })}
        />
        {errors.to && (
          <p className="sendMail__error">Empfänger ist erforderlich!</p>
        )}

        <input
          type="text"
          placeholder="Betreff"
          name="subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="sendMail__error">Betreff ist erforderlich!</p>
        )}

        <input
          type="text"
          placeholder="Ihre Nachricht..."
          className="sendMail__message"
          name="message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="sendMail__error">Nachricht ist erforderlich!</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__options__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Senden
          </Button>
        </div>
      </form>
    </div>
  );
}
